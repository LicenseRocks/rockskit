import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H4, Image, Text } from "../..";
import { Icon } from "../../Icon";
import { DropzoneItemStyles, PreviewWrapperStyles, TrashIcon } from "./SharedStyles";
import { Input } from "../Input";

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
}

const IMAGE_PREVIEW_SIZE = 48;

export const UploaderPreviewItem = ({
  file,
  fileNameEditable,
  onEdit,
  removeFile,
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
    <DropzoneItem key={name}>
      <div className="details">
        {file.type.startsWith("image") ? (
          <PreviewWrapper>
            {file.preview ? (
              <Image alt={name} height={IMAGE_PREVIEW_SIZE} src={file.preview} width={IMAGE_PREVIEW_SIZE} />
            ) : (
              <H4 content={fileExt} color="textSecondary" noWrap />
            )}
          </PreviewWrapper>
        ) : null}
        {file.type.startsWith("video") ? (
          <PreviewWrapper>
            <H4 content={fileExt} color="textSecondary" noWrap />
          </PreviewWrapper>
        ) : null}

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
          {file?.size && <div>{bytesToSize(String(file.size))}</div>}
        </div>
      </div>

      <div className="details">
        <ActionIcon icon="check" />
        <Text ml={2} mr={4}>File uploaded</Text>

        {fileNameEditable && !editMode && (
          <ActionIcon
            prefix="far"
            icon="pencil"
            onClick={() => setEditMode(true)}
            mr={2}
            title="Edit name"
          />
        )}

        <TrashIcon onClick={() => removeFile(file)} />
      </div>
    </DropzoneItem>
  );
};

const DropzoneItem = styled.div`
  ${DropzoneItemStyles};
  background-color: ${({ theme }) => theme.palette.green.light};

  .react-thumbnail-generator {
    border-radius: 8px;
    object-fit: cover;
    width: ${IMAGE_PREVIEW_SIZE}px;
    height: ${IMAGE_PREVIEW_SIZE}px;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;

const ActionIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.common.black};
`;

const PreviewWrapper = styled.div`
  ${PreviewWrapperStyles};
  background-color: ${({ theme }) => theme.palette.gray.regular};
`;

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
