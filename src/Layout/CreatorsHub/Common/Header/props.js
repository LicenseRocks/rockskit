import PropTypes from "prop-types";

export const CreatorsHubHeaderPropTypes = {
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  primaryNavItems: PropTypes.array,
  primaryHasBorder: PropTypes.bool,
  primaryWhite: PropTypes.bool,
  renderLogo: PropTypes.func,
  secondary: PropTypes.bool,
  secondaryNavItems: PropTypes.array,
  secondaryRenderRight: PropTypes.func,
};

export const CreatorsHubHeaderDefaultProps = {
  renderLogo: () => {},
  secondaryRenderRight: () => {},
};
