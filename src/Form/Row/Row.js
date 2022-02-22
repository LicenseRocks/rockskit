import React, { Children } from "react";
import styled, { css } from "styled-components";

import { FormError, FormLabel } from "..";
import { FormRowPropTypes, FormRowDefaultProps } from "./props";
import { DISPLAY, getFormRowErrors, Icon, SPACER, Tooltip } from "../..";

const StyledRow = styled.div`
  display: flex;
  min-height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  ${({ show }) => !show && "display: none"};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap;
  }

  ${({ labelAlign }) =>
    labelAlign === "center" &&
    css`
      align-items: center;
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledLabel = styled(FormLabel)`
  flex: 0 0 30%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    padding-top: 0;
  }

  ${({ labelAlign, labelGutter, theme }) =>
    labelAlign === "start" &&
    labelGutter &&
    css`
      padding-top: ${theme.spacing(3)};
    `}
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

const Hint = styled.span`
  background: #f0f0f4;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  vertical-align: middle;
  svg {
    color: #8685a6;
    font-size: 10px;
  }
`;

export const FormRow = ({
  children,
  errors,
  fields,
  hint,
  label,
  labelAlign,
  labelGutter,
  show,
  ...props
}) => {
  const rowErrors = Array.isArray(errors)
    ? errors
    : getFormRowErrors(errors, fields);

  const validChildren = Children.toArray(children).filter(Boolean);

  return (
    <StyledRow labelAlign={labelAlign} show={show} {...props}>
      {label && (
        <StyledLabel labelAlign={labelAlign} labelGutter={labelGutter}>
          {label}
          {hint && (
            <Tooltip content={hint}>
              <Hint>
                <Icon icon="question" />
              </Hint>{" "}
            </Tooltip>
          )}
        </StyledLabel>
      )}

      {validChildren.length > 0 && (
        <FieldsAndErrorsWrapper fullWidth={!label}>
          <Fields>{children}</Fields>

          {rowErrors.map((err) => (
            <FormError key={err} message={err} />
          ))}
        </FieldsAndErrorsWrapper>
      )}
    </StyledRow>
  );
};

FormRow.propTypes = FormRowPropTypes;

FormRow.defaultProps = FormRowDefaultProps;
