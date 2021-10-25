/* eslint-disable no-restricted-properties */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H4, Image } from "../..";
import { Icon } from "../../Icon";
import { Input } from "../Input";

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

const ActionIcon = styled(Icon)`
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

export const UploaderPreviewItem = ({
  file,
  fileNameEditable,
  onRemoveClick,
  onEdit,
}) => {
  const name = file.altName || file.fileName || file.name;
  const fileExt = name.split(".").pop();

  const [editMode, setEditMode] = useState(false);
  const [altName, setAltName] = useState(name.split(".").shift());

  const handleEdit = () => {
    onEdit(file, `${altName}.${fileExt}`);
    setEditMode(false);
  };

  useEffect(() => {
    if (editMode) {
      setAltName(name.split(".").shift());
    }
  }, [editMode]);

  return (
    <Item key={file.name}>
      <div className="details">
        <PreviewWrapper>
          {file.preview ? (
            <Image alt={name} height="100%" src={file.preview} width="100%" />
          ) : (
            <H4 content={fileExt} color="textSecondary" noWrap />
          )}
        </PreviewWrapper>

        <div>
          {editMode ? (
            <div className="details">
              <Input
                onChange={(e) => setAltName(e.target.value)}
                mb={2}
                value={altName}
              />

              <ActionIcon
                disabled={!altName}
                icon="check"
                onClick={handleEdit}
                mx={2}
              />

              <ActionIcon icon="times" onClick={() => setEditMode(false)} />
            </div>
          ) : (
            <b>{name}</b>
          )}
          {file?.size && <div>{bytesToSize(file.size)}</div>}
        </div>
      </div>

      <div className="details">
        {fileNameEditable && !editMode && (
          <ActionIcon
            icon="pencil-alt"
            onClick={() => setEditMode(true)}
            mr={2}
          />
        )}

        {onRemoveClick && (
          <ActionIcon icon="trash" onClick={() => onRemoveClick(file)} />
        )}
      </div>
    </Item>
  );
};

UploaderPreviewItem.propTypes = {
  file: PropTypes.shape({
    altName: PropTypes.string,
    name: PropTypes.string,
    preview: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
  fileNameEditable: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
