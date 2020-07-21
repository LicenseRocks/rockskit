import React from "react";

import { BaseTypography, BaseTypographyPropTypes } from "../Base";

export const H5 = (props) => {
  return <BaseTypography variant="h5" {...props} />;
};

H5.propTypes = BaseTypographyPropTypes;
