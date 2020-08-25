import React from "react";
import styled from "styled-components";

import { FormError, FormLabel } from "..";
import { FormRowPropTypes, FormRowDefaultProps } from "./props";
import { DISPLAY, getFormRowErrors, SPACER } from "../..";

const StyledRow = styled.div`
  display: flex;
  min-height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  ${({ show }) => !show && "display: none"};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap;
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledLabel = styled(FormLabel)`
  flex: 0 0 30%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 1;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    padding-top: 0;
  }
`;

const FieldsAndErrorsWrapper = styled.div`
  flex: 1;
`;

const Fields = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > * {
    :not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const FormRow = ({
  children,
  errors,
  fields,
  label,
  show,
  ...props
}) => {
  const rowErrors = Array.isArray(errors)
    ? errors
    : getFormRowErrors(errors, fields);

  return (
    <StyledRow show={show} {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <FieldsAndErrorsWrapper fullWidth={!label}>
        <Fields>{children}</Fields>
        {rowErrors.map((err) => (
          <FormError key={err} message={err} />
        ))}
      </FieldsAndErrorsWrapper>
    </StyledRow>
  );
};

FormRow.propTypes = FormRowPropTypes;

FormRow.defaultProps = FormRowDefaultProps;
