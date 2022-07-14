import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const FilesListPropTypes = {
  listTitle: PropTypes.string,
  files: PropTypes.array,
  LinkComponent: PropTypes.func,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FilesListDefaultProps = {
  listTitle: "List Title",
  files: PropTypes.array,
  LinkComponent: PropTypes.func,
};
