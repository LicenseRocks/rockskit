import PropTypes from "prop-types";

export const FileUploadPropTypes = {
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  isRequired: PropTypes.string,
  name: PropTypes.string,
};

export const FileUploadDefaultProps = {
  defaultValue: undefined,
  name: "fileUpload",
};
