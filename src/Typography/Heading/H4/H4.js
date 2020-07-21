import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H4 = (props) => {
  return <BaseHeading variant="h4" {...props} />;
};

H4.propTypes = BaseHeadingPropTypes;
