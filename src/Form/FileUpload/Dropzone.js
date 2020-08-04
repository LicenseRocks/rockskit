import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import styled, { css } from "styled-components";

import { DropzonePreview } from "./DropzonePreview";
import { DISPLAY, SPACER } from "../../theme";

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
  accept,
  disabled,
  defaultValue,
  hasError,
  multiple,
  onChange,
  ...props
}) => {
  const [files, setFiles] = useState(defaultValue);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept,
    disabled,
    multiple,
    onDrop: (acceptedFiles) => {
      const accepted = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(accepted);

      if (onChange) {
        onChange(accepted);
      }
    },
  });

  const removeFile = (file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);

    if (onChange) {
      onChange(newFiles);
    }
  };

  return (
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
            {multiple ? <p>Accepts multiple files</p> : <p>Single file only</p>}
          </>
        )}
      </DropzoneArea>
      <DropzonePreview files={files} onRemoveClick={removeFile} />
    </StyledContainer>
  );
};

Dropzone.propTypes = {
  accept: PropTypes.string,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

Dropzone.defaultProps = {
  accept: "image/*",
  defaultValue: [],
  disabled: false,
  hasError: false,
  multiple: true,
  onChange: () => {},
};
