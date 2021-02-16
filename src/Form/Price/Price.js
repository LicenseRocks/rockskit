import React from "react";
import styled from "styled-components";

import { FieldWrapper, Input } from "..";
import { Select } from "../Select";
import { PriceFieldPropTypes, PriceFieldDefaultProps } from "./props";

const StyledSelect = styled(Select)`
  && {
    flex: 0 0 30%;
    border-left: 1px solid ${({ theme }) => theme.palette.gray.regular};
  }
`;

export const PriceField = ({
  currencies,
  defaultValue,
  hasError,
  hasWrapper,
  inputProps,
  name,
  register,
  selectProps,
  ...props
}) => {
  return (
    <FieldWrapper hasError={hasError} {...props}>
      <Input
        defaultValue={defaultValue}
        hasError={hasError}
        hasWrapper={false}
        name={name}
        register={register}
        step="0.01"
        type="number"
        {...inputProps}
      />

      <StyledSelect
        hasWrapper={false}
        options={currencies}
        register={register}
        {...selectProps}
      />
    </FieldWrapper>
  );
};

PriceField.propTypes = PriceFieldPropTypes;

PriceField.defaultProps = PriceFieldDefaultProps;
