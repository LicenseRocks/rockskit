/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";

import { UploaderPreviewItem } from "./PreviewItem";

export const UploaderPreview = ({ files, index, onRemoveClick, ...props }) => {
  const filteredFiles = files?.filter(f => f)
  return filteredFiles.map((file, index) => (
    <UploaderPreviewItem key={file?.name + index} file={file} removeFile={onRemoveClick} {...props} />
  ));
};

UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

UploaderPreview.defaultProps = {
  files: [],
};
