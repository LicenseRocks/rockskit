import React from "react";

import { BaseTypography, BaseTypographyPropTypes } from "../Base";

export const H3 = (props) => {
  return <BaseTypography variant="h3" {...props} />;
};

H3.propTypes = BaseTypographyPropTypes;
