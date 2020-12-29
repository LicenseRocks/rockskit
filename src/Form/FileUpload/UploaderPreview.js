/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H4, Image } from "../..";
import { Icon } from "../../Icon";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 4)};
  background-color: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 12px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const RemoveIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const PreviewWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing(2)};

  img {
    border-radius: 8px;
    object-fit: cover;
  }

  && {
    h4 {
      text-transform: uppercase;
    }
  }
`;

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
}

export const UploaderPreview = ({ files, onRemoveClick }) => {
  return Array.from(files).map((file) => (
    <Item key={file.name}>
      <div className="details">
        <PreviewWrapper>
          {file.preview ? (
            <Image
              alt={file.name}
              height="100%"
              src={file.preview}
              width="100%"
            />
          ) : (
            <H4
              content={file.name.split(".").pop()}
              color="textSecondary"
              noWrap
            />
          )}
        </PreviewWrapper>

        <div>
          <b>{file.name}</b>
          <div>{bytesToSize(file.size)}</div>
        </div>
      </div>

      {onRemoveClick && (
        <RemoveIcon icon="times" onClick={() => onRemoveClick(file)} />
      )}
    </Item>
  ));
};

UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemoveClick: PropTypes.func.isRequired,
};

UploaderPreview.defaultProps = {
  files: [],
};
