import PropTypes from "prop-types";

import { CreatorsHubHeaderPropTypes } from "../Common/Header/props";
import { CreatorsHubFooterPropTypes } from "../Common/Footer/props";

export const CreatorsHubMainLayoutPropTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool,
  footerProps: PropTypes.shape(CreatorsHubFooterPropTypes),
  headerProps: PropTypes.shape(CreatorsHubHeaderPropTypes),
  sidebar: PropTypes.node,
};

export const CreatorsHubMainLayoutDefaultProps = {};
