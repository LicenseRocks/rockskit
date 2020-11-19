import PropTypes from "prop-types";

export const CreatorsHubHeaderPropTypes = {
  fixed: PropTypes.bool,
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  primaryNavItems: PropTypes.array,
  primaryWhite: PropTypes.bool,
  renderLogo: PropTypes.func,
  secondary: PropTypes.bool,
  secondaryHasBorder: PropTypes.bool,
  secondaryHideOnScroll: PropTypes.bool,
  secondaryNavItems: PropTypes.array,
  secondaryRenderRight: PropTypes.func,
};

export const CreatorsHubHeaderDefaultProps = {
  renderLogo: () => {},
  secondaryRenderRight: () => {},
};
