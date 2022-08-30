import React from "react";
import { Text } from "../../Typography";
import styled from "styled-components";
import { Icon } from "../../Icon";
import { DropzoneItemStyles, PreviewWrapperStyles, TrashIcon } from "./SharedStyles";
import PropTypes from "prop-types";

export const DropzoneError = ({ title, errors, index, setErrorMessages }) => {

  const handleErrorDelete = () => setErrorMessages(prevState => prevState.filter((item, i) => i !== index));

  return (
    <DropzoneItem key={title}>
      <div className="details">
        <PreviewWrapper>
          <GrayIcon icon="triangle-exclamation" prefix="far" size="lg" />
        </PreviewWrapper>
        <div className="title">
          <b>{title}</b>
          <Text display="block">—</Text>
        </div>
      </div>
      <div className="details">
        <div className="errors">
          {errors.map(error => {
            let errorMsg = error;
            if (error.includes("application/")) {
              errorMsg = error.split("application/")[0] + "." + error.split("application/")[1];
            }
            return (
              <Text key={error}>{errorMsg}</Text>
            );
          })}
        </div>
        <TrashIcon onClick={handleErrorDelete} />
      </div>
    </DropzoneItem>
  );
};

const DropzoneItem = styled.div`
  ${DropzoneItemStyles};
  background-color: ${({ theme }) => theme.palette.red.light};

  .title {
    display: flex;
    flex-direction: column;
  }

  .errors {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

const PreviewWrapper = styled.div`
  ${PreviewWrapperStyles};
`;

const GrayIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.gray.medium}
`;

DropzoneError.propTypes = {
  title: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setErrorMessages: PropTypes.func.isRequired,
};

