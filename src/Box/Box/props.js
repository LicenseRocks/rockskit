import PropTypes from "prop-types";

import { BoxBasePropTypes, BoxBaseDefaultProps } from "../Base";

export const BoxPropTypes = {
  children: PropTypes.node.isRequired,
  footerAction: PropTypes.func,
  footerActionLoading: PropTypes.bool,
  footerActionDisabled: PropTypes.bool,
  footerActionTitle: PropTypes.string,
  footerActionType: PropTypes.string,
  footerRenderAction: PropTypes.func,
  footerRenderTitle: PropTypes.func,
  headerAction: PropTypes.func,
  headerActionIcon: PropTypes.string,
  headerActionIconProps: PropTypes.shape({}),
  headerActionIconSize: PropTypes.string,
  headerMetaTitle: PropTypes.string,
  headerMetaTitleColor: PropTypes.string,
  headerRenderAction: PropTypes.func,
  headerRenderTitle: PropTypes.func,
  headerSubTitle: PropTypes.string,
  headerSubTitleColor: PropTypes.string,
  headerTitle: PropTypes.string,
  headerTitleIcon: PropTypes.string,
  headerTitleIconProps: PropTypes.shape({}),
  headerTitleSize: PropTypes.string,
  padding: PropTypes.number,
  transition: PropTypes.bool,
  ...BoxBasePropTypes,
};

export const BoxDefaultProps = {
  padding: 6,
  transition: false,
  ...BoxBaseDefaultProps,
};
