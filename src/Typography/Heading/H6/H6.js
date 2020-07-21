import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H6 = (props) => {
  return <BaseHeading variant="h6" {...props} />;
};

H6.propTypes = BaseHeadingPropTypes;
