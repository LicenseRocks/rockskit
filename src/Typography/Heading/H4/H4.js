import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H4 = (props) => {
  return <HeadingBase variant="h4" {...props} />;
};

H4.propTypes = HeadingBasePropTypes;
