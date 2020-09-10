import PropTypes from "prop-types";

export const MarketPlaceItemPropTypes = {
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  coverSrc: PropTypes.string,
  coverPlaceholderSrc: PropTypes.string,
  details: PropTypes.array,
  hoverEffect: PropTypes.bool,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  megaTitle: PropTypes.string,
  price: PropTypes.string,
  priceLabel: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf("legacy", "modern", "modernHorizontal"),
};

export const MarketPlaceItemDefaultProps = {
  actionTitle: "More info",
  badges: [],
  details: [],
  hoverEffect: true,
  type: "modern",
};
