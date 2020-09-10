import React from "react";
import styled from "styled-components";

import { RadioBaseItem } from "../RadioBase/Item";
import { RadioBasePropTypes, RadioBaseDefaultProps } from "../RadioBase";
import { DISPLAY, SPACER } from "../../theme";

const Wrapper = styled.div`
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.palette.error.main : theme.palette.gray.regular};
  border-radius: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms ease-in-out;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const BorderedRadio = ({ hasError, options, ...props }) => {
  return (
    <Wrapper hasError={hasError}>
      {options.map((opt) => {
        return (
          <RadioBaseItem
            key={opt.value}
            hasError={hasError}
            {...props}
            {...opt}
            bordered
            type="radio"
            stacked={false}
          />
        );
      })}
    </Wrapper>
  );
};

BorderedRadio.propTypes = RadioBasePropTypes;

BorderedRadio.defaultProps = RadioBaseDefaultProps;
