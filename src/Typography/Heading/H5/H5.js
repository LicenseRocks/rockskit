import React from "react";

import { HeadingBase, HeadingBasePropTypes } from "../Base";

export const H5 = (props) => {
  return <HeadingBase variant="h5" {...props} />;
};

H5.propTypes = HeadingBasePropTypes;
