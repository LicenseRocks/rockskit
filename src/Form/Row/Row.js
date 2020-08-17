import React from "react";
import styled from "styled-components";

import { FormError, FormLabel } from "..";
import { FormRowPropTypes, FormRowDefaultProps } from "./props";
import { DISPLAY, getFormRowErrors, SPACER } from "../..";

const Wrapper = styled.div`
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
  flex: 30% 0;
  padding-top: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 100% 0;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    padding-top: 0;
  }
`;

const FieldsAndErrorsWrapper = styled.div`
  flex: ${({ fullWidth }) => (fullWidth ? "100%" : "70%")} 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 100% 0;
  }
`;

const Fields = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
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
    <Wrapper show={show} {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <FieldsAndErrorsWrapper fullWidth={!label}>
        <Fields>{children}</Fields>
        {rowErrors.map((err) => (
          <FormError key={err} message={err} />
        ))}
      </FieldsAndErrorsWrapper>
    </Wrapper>
  );
};

FormRow.propTypes = FormRowPropTypes;

FormRow.defaultProps = FormRowDefaultProps;
