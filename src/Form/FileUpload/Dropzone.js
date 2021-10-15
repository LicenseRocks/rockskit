import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import styled, { css } from "styled-components";

import { UploaderPreview } from "./UploaderPreview";
import { DISPLAY, SPACER } from "../../theme";
import { CropModal } from "./CropModal";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const DropzoneArea = styled.div`
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  border-color: ${({ theme }) => theme.palette.gray.regular};
  border-radius: 16px;
  border-style: dashed;
  border-width: 2px;
  cursor: pointer;
  min-height: 125px;
  outline: none;
  transition: all 100ms ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.gray.black};
  margin-bottom: 8px;

  &:hover {
    border-color: ${({ theme }) => theme.palette.gray.medium};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.palette.error.main};
      background-color: ${({ theme }) => theme.palette.error.light};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({ dragActive, theme }) =>
    dragActive &&
    css`
      border-color: ${theme.palette.gray.medium};
    `}
`;

export const Dropzone = ({
  crop,
  cropProps,
  disabled,
  defaultValue,
  fileNameEditable,
  hasError,
  multiple,
  onChange,
  value,
  maxSize,
  ...props
}) => {
  const [cropFile, setCropFile] = useState();

  const setFiles = (files) => {
    const accepted = files.map((file) =>
      Object.assign(file, {
        preview: file.type.includes("image") ? URL.createObjectURL(file) : "",
        altName: null,
      })
    );

    if (multiple) onChange([...value, ...accepted]);
    else onChange([...accepted]);
  };

  const editFile = (file, altName) => {
    onChange(
      value.map((f) => {
        if (f.preview === file.preview) {
          Object.assign(file, {
            altName,
          });
        }

        return f;
      })
    );
  };

  const handleCrop = (file) => {
    setFiles([file]);
    setCropFile();
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    disabled,
    multiple,
    onDrop: (acceptedFiles) => {
      if (crop && !multiple) {
        setCropFile(acceptedFiles[0]);
      } else {
        setFiles(acceptedFiles);
      }
    },
    ...props,
  });

  console.log(">>", crop, maxSize);

  const removeFile = (file) => {
    onChange(value.filter((f) => f.preview !== file.preview));
  };

  return (
    <>
      <StyledContainer {...props}>
        <DropzoneArea
          dragActive={isDragActive}
          dragAccept={isDragAccept}
          dragReject={isDragReject}
          disabled={disabled}
          hasError={hasError}
          {...getRootProps()}
        >
          <input {...getInputProps()} />

          {isDragAccept && <p>Accepted</p>}
          {isDragReject && <p>Rejected</p>}

          {isDragActive ? (
            <p>Drop here</p>
          ) : (
            <>
              <p>Drop, or click to select</p>
              {multiple ? (
                <p>Accepts multiple files</p>
              ) : (
                <p>Single file only</p>
              )}
            </>
          )}
        </DropzoneArea>

        <UploaderPreview
          files={value}
          fileNameEditable={fileNameEditable}
          onRemoveClick={removeFile}
          onEdit={editFile}
        />
      </StyledContainer>

      <CropModal
        isOpen={!!cropFile}
        onClose={() => setCropFile()}
        imgFile={cropFile}
        onSubmit={handleCrop}
        {...cropProps}
      />
    </>
  );
};

Dropzone.propTypes = {
  accept: PropTypes.string,
  crop: PropTypes.bool,
  cropProps: PropTypes.shape({}),
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  fileNameEditable: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.shape),
};

Dropzone.defaultProps = {
  accept: "image/*",
  crop: false,
  cropProps: {},
  defaultValue: [],
  disabled: false,
  fileNameEditable: false,
  hasError: false,
  multiple: true,
  onChange: () => {},
  value: [],
};
