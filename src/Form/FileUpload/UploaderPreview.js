/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";

import { UploaderPreviewItem } from "./PreviewItem";

export const UploaderPreview = ({ files, index, setFilesArray, ...props }) => {
  return Array.from(files).map((file, index) => (
    <UploaderPreviewItem key={file.name+index} file={file} index={index} setFilesArray={setFilesArray} {...props} />
  ));
};

UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

UploaderPreview.defaultProps = {
  files: [],
};
