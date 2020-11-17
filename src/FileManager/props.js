import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const FileManagerPropTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          date: PropTypes.string,
          description: PropTypes.string,
          previewUrl: PropTypes.string,
          renderDate: PropTypes.func,
          renderDescription: PropTypes.func,
          renderName: PropTypes.func,
          renderPreview: PropTypes.func,
        })
      ),
    })
  ),
  noItemsText: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FileManagerDefaultProps = {
  noItemsText: "No items yet",
};
