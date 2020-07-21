import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H6 = (props) => {
  return <HeadingBase variant="h6" {...props} />;
};

H6.propTypes = HeadingBasePropTypes;
