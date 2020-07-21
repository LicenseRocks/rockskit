import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H1 = (props) => {
  return <HeadingBase variant="h1" {...props} />;
};

H1.propTypes = HeadingBasePropTypes;
