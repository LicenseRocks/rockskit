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

  ${({ direction }) =>
    direction === "column" &&
    css`
      flex-direction: column;
      align-items: start;
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledLabel = styled(FormLabel)`
  flex: 0 0 30%;

  ${({ direction }) =>
    direction === "column" &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing(3)};
    `}

  ${({ labelColor }) =>
    labelColor === "dark" &&
    css`
      color: ${({ theme }) => theme.palette.gray.black};
    `}

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
  ${({ direction }) =>
    direction === "column" &&
    css`
      width: 100%;
    `}
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

  ${({ bottomHintText }) =>
    bottomHintText &&
    css`
      position: relative;
      z-index: 1;
      margin-bottom: ${({ theme }) => theme.spacing(5)};

      &::after {
        content: "${bottomHintText}";
        position: absolute;
        bottom: -50%;
        left: 0;
        z-index: -1;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        border-radius: 6px 6px 12px 12px;
        padding-bottom: 2px;
        padding-left: ${({ theme }) => theme.spacing(6)};
        background-color: ${({ theme }) => theme.palette.gray.regular};
      }
    `}
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
  labelColor,
  direction,
  bottomHintText,
  ...props
}) => {
  const rowErrors = Array.isArray(errors)
    ? errors
    : getFormRowErrors(errors, fields);

  const validChildren = Children.toArray(children).filter(Boolean);

  return (
    <StyledRow
      labelAlign={labelAlign}
      show={show}
      direction={direction}
      {...props}
    >
      {label && (
        <StyledLabel
          labelAlign={labelAlign}
          labelGutter={labelGutter}
          direction={direction}
          labelColor={labelColor}
        >
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
        <FieldsAndErrorsWrapper direction={direction} fullWidth={!label}>
          <Fields bottomHintText={bottomHintText} >{children}</Fields>

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
