import React from "react";
import PropTypes from "prop-types";

import { Icon } from "..";

export const CollapseButton = ({ isOpened, ...props }) => (
  <Icon icon={isOpened ? "chevron-up" : "chevron-down"} {...props} />
);

CollapseButton.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};
