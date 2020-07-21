import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H1 = (props) => {
  return <BaseHeading variant="h1" {...props} />;
};

H1.propTypes = BaseHeadingPropTypes;
