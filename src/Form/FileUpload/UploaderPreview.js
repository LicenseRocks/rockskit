/* eslint-disable no-restricted-properties */
import React from "react";
import PropTypes from "prop-types";

import { UploaderPreviewItem } from "./PreviewItem";

export const UploaderPreview = ({ files, ...props }) => {
  return Array.from(files).map((file) => (
    <UploaderPreviewItem key={file.name} file={file} {...props} />
  ));
};

UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

UploaderPreview.defaultProps = {
  files: [],
};
