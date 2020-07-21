import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H5 = (props) => {
  return <BaseHeading variant="h5" {...props} />;
};

H5.propTypes = BaseHeadingPropTypes;
