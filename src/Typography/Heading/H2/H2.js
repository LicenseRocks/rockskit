import React from "react";

import { BaseHeading, BaseHeadingPropTypes } from "../Base";

export const H2 = (props) => {
  return <BaseHeading variant="h2" {...props} />;
};

H2.propTypes = BaseHeadingPropTypes;
