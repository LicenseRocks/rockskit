import PropTypes from "prop-types";

export const MarketPlaceItemPropTypes = {
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  details: PropTypes.array,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  megaTitle: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export const MarketPlaceItemDefaultProps = {
  actionTitle: "More info",
  details: [],
};
