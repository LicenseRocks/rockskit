import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H3 = (props) => {
  return <BaseHeading variant="h3" {...props} />;
};

H3.propTypes = BaseHeadingPropTypes;
