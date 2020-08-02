import React from "react";

import { Fieldset } from "..";
import { RadioBaseItem } from "./Item";
import { RadioBasePropTypes, RadioBaseDefaultProps } from "./props";

export const RadioBase = ({ options, ...props }) => {
  return (
    <Fieldset>
      {options.map((opt) => (
        <RadioBaseItem key={opt.value} {...opt} {...props} />
      ))}
    </Fieldset>
  );
};

RadioBase.propTypes = RadioBasePropTypes;

RadioBase.defaultProps = RadioBaseDefaultProps;
