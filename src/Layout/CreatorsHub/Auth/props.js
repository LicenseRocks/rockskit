import PropTypes from "prop-types";

import { CreatorsHubHeaderPropTypes } from "../Common/Header/props";

export const CreatorsHubAuthLayoutPropTypes = {
  children: PropTypes.node,
  headerProps: PropTypes.shape(CreatorsHubHeaderPropTypes),
};

export const CreatorsHubAuthLayoutDefaultProps = {};
