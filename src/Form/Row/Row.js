import React from "react";
import styled from "styled-components";

import { FormError, FormLabel } from "..";
import { FormRowPropTypes, FormRowDefaultProps } from "./props";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 8px;
  ${({ show }) => !show && "display: none"};
`;

const StyledLabel = styled(FormLabel)`
  flex: 30% 0;
`;

const FieldsAndErrorsWrapper = styled.div`
  flex: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")} 0;
`;

const Fields = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const FormRow = ({ children, errors, label, show }) => {
  return (
    <Wrapper show={show}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <FieldsAndErrorsWrapper fullWidth={!label}>
        <Fields>{children}</Fields>
        {errors.map((err) => (
          <FormError key={err} message={err} />
        ))}
      </FieldsAndErrorsWrapper>
    </Wrapper>
  );
};

FormRow.propTypes = FormRowPropTypes;

FormRow.defaultProps = FormRowDefaultProps;
