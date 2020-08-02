/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../..";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const RemoveIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.common.white};
`;

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
}

export const DropzonePreview = ({ files, onRemoveClick }) => {
  return files.map((file) => (
    <Item key={file.name}>
      <div>
        <b>{file.name}</b>
        <div>{bytesToSize(file.size)}</div>
      </div>
      <RemoveIcon icon="times" onClick={onRemoveClick} />
    </Item>
  ));
};

DropzonePreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  onRemoveClick: PropTypes.func.isRequired,
};

DropzonePreview.defaultProps = {
  files: [],
};
