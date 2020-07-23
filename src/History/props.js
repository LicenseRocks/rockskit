import PropTypes from "prop-types";

export const HistoryPropTypes = {
  rows: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    moreInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
  }).isRequired,
};

export const HistoryDefaultProps = {};
