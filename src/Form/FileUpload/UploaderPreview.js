/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";

import { UploaderPreviewItem } from "./PreviewItem";

export const UploaderPreview = ({ files, index, onRemoveClick, ...props }) => {
  return files.map((file, idx) => (
    <UploaderPreviewItem key={file?.name + idx} file={file} removeFile={onRemoveClick} {...props} />
  ));
};

UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

UploaderPreview.defaultProps = {
  files: [],
};
