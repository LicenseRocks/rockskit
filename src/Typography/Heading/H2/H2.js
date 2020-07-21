import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H2 = (props) => {
  return <HeadingBase variant="h2" {...props} />;
};

H2.propTypes = HeadingBasePropTypes;
