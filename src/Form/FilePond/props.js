import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const FileUploadPropTypes = {
  allowRemove: PropTypes.bool,
  allowRevert: PropTypes.bool,
  allowMultiple: PropTypes.bool,
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.string,
  name: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FileUploadDefaultProps = {
  allowRemove: false,
  allowRevert: false,
  allowMultiple: true,
  defaultValue: undefined,
  name: "fileUpload",
};
