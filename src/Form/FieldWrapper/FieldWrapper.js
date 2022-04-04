import React from "react";
import copy from "copy-to-clipboard";
import styled, { css } from "styled-components";

import { DISPLAY, SPACER } from "../../theme";
import { Icon } from "../../Icon";
import { FieldWrapperDefaultProps, FieldWrapperPropTypes } from "./props";
import { H5 } from "../..";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.gray.regular};
  padding: ${({ theme }) => theme.spacing(0, 4)};
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  ${({ fixedHeight }) => fixedHeight && "height: 40px;"}

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  h5 {
    color: ${({ theme }) => theme.palette.gray.regular};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.error.main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({ block }) =>
    block &&
    css`
      flex: 1;
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const FieldWrapper = ({
  children,
  endIcon,
  copyable,
  valueToCopy,
  endIconColor,
  endIconOnClick,
  endIconPrefix,
  language,
  startIcon,
  startIconColor,
  startIconOnClick,
  startIconPrefix,
  ...props
}) => {
  const [hasJustCopied, setHasJustCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasJustCopied) {
      const timeout = setTimeout(() => {
        setHasJustCopied(false);
      }, 600);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [hasJustCopied]);

  return (
    <StyledWrapper {...props}>
      {startIcon && (
        <Icon
          color={startIconColor}
          icon={startIcon}
          onClick={startIconOnClick}
          prefix={startIconPrefix}
        />
      )}
      {language && !startIcon && <H5 content={language} />}

      {children}

      {copyable ? (
        !hasJustCopied ? (
          <Icon
            color={endIconColor}
            icon="copy"
            onClick={() => {
              console.log({valueToCopy})
              setHasJustCopied(true);
              copy(valueToCopy, {debug: true});
            }}
          />
        ) : (
          <Icon icon="check" color={endIconColor} />
        )
      ) : endIcon ? (
        <Icon
          color={endIconColor}
          icon={endIcon}
          onClick={endIconOnClick}
          prefix={endIconPrefix}
        />
      ) : null}
    </StyledWrapper>
  );
};

FieldWrapper.propTypes = FieldWrapperPropTypes;

FieldWrapper.defaultProps = FieldWrapperDefaultProps;
