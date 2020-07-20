import React from "react";

import { BaseTypography, BaseTypographyPropTypes } from "../Base";

export const H2 = (props) => {
  return <BaseTypography variant="h2" {...props} />;
};

H2.propTypes = BaseTypographyPropTypes;
