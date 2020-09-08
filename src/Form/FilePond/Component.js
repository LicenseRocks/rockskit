import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import { DISPLAY, SPACER } from "../../theme";
import { UploaderPreview } from "../FileUpload/UploaderPreview";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  border-color: ${({ theme }) => theme.palette.gray.regular};
  border-radius: 16px;
  border-style: dashed;
  border-width: 2px;
  cursor: pointer;
  min-height: 125px;
  outline: none;
  transition: all 100ms ease-in-out;
  color: ${({ theme }) => theme.palette.gray.black};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.palette.gray.medium};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.palette.error.main};
      background-color: ${({ theme }) => theme.palette.error.light};
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledFilePond = styled(FilePond)`
  &.filepond--root {
    font-weight: unset;
    font-family: unset;
    font-size: unset;
    overflow: hidden;
  }

  .filepond--drop-label {
    color: unset;
  }

  && {
    .filepond--panel,
    .filepond--panel-root,
    .filepond--drip,
    .filepond--drop-label {
      background-color: transparent !important;
    }
  }
`;

export const FilePondComponent = ({
  disabled,
  hasError,
  onChange,
  value,
  ...props
}) => {
  return (
    <Wrapper>
      <Container disabled={disabled} hasError={hasError}>
        <StyledFilePond
          disabled={disabled}
          onprocessfile={(error, file) => {
            if (file.status === 5) {
              onChange([
                ...value,
                {
                  id: file.id,
                  name: file.filename,
                  size: file.fileSize,
                  serverId: file?.serverId,
                },
              ]);
            }
          }}
          {...props}
        />
      </Container>

      <UploaderPreview
        files={value}
        onRemoveClick={(file) => {
          onChange(value.filter((f) => f.id !== file.id));
        }}
      />
    </Wrapper>
  );
};

FilePondComponent.propTypes = {
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.shape),
};

FilePondComponent.defaultProps = {
  accept: "image/*",
  disabled: false,
  hasError: false,
  multiple: true,
  onChange: () => {},
  value: [],
};
