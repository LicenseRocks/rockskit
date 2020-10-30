import PropTypes from "prop-types";

import { CreatorsHubHeaderPropTypes } from "../Common/Header/props";

export const CreatorsHubMainLayoutPropTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  headerProps: PropTypes.shape(CreatorsHubHeaderPropTypes),
  sidebar: PropTypes.node,
};

export const CreatorsHubMainLayoutDefaultProps = {};
