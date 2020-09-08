import React from "react";

import { FieldBase } from "../FieldBase";
import { TextAreaPropTypes, TextAreaDefaultProps } from "./props";

export const TextArea = (props) => {
  return <FieldBase {...props} component="textarea" fixedHeight={false} />;
};

TextArea.propTypes = TextAreaPropTypes;

TextArea.defaultProps = TextAreaDefaultProps;
