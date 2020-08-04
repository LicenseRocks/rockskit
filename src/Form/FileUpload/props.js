import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const FileUploadPropTypes = {
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  isRequired: PropTypes.string,
  name: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FileUploadDefaultProps = {
  defaultValue: undefined,
  name: "fileUpload",
};
