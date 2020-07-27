import React from "react";

import { TextBase, TextBasePropTypes } from "../Base";

export const Text = (props) => {
  return <TextBase component="div" variant="body2" {...props} />;
};

Text.propTypes = TextBasePropTypes;
