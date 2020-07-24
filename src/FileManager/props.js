import PropTypes from "prop-types";

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
        })
      ),
    })
  ),
};

export const FileManagerDefaultProps = {};
