import React from "react";

import { BaseText, BaseTextPropTypes } from "../Base";

export const Text = (props) => {
  return <BaseText component="span" variant="body2" {...props} />;
};

Text.propTypes = BaseTextPropTypes;
