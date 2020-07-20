import React from "react";

import { BaseTypography, BaseTypographyPropTypes } from "../Base";

export const H1 = (props) => {
  return <BaseTypography variant="h1" {...props} />;
};

H1.propTypes = BaseTypographyPropTypes;
