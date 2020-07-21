import React from "react";

import { BaseTypography, BaseTypographyPropTypes } from "../Base";

export const H6 = (props) => {
  return <BaseTypography variant="h6" {...props} />;
};

H6.propTypes = BaseTypographyPropTypes;
