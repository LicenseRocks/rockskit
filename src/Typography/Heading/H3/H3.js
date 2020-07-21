import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H3 = (props) => {
  return <HeadingBase variant="h3" {...props} />;
};

H3.propTypes = HeadingBasePropTypes;
