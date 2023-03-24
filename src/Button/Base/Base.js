import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import MuiButtonBase from "@material-ui/core/ButtonBase";
import { DISPLAY, DotsSpinner, Icon, SPACER } from "../..";
import { ButtonBasePropTypes, ButtonBaseDefaultProps } from "./props";

const StyledButton = styled(MuiButtonBase)`
  && {
    box-sizing: border-box;
    border-radius: 50px;
    transition: all 100ms ease-in-out;
    width: ${({ block }) => (block ? "100%" : "initial")};

    :hover {
      opacity: 0.7;
    }

    :disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }

    .icon_wrapper {
      display: grid;
      place-items: center;
    }
    
    .icon_wrapper.start_icon {
      margin: ${({ content, theme }) => !!content ? theme.spacing(0, 2, 0, 0) : theme.spacing(0) };
    }

    .icon_wrapper.end_icon {
      margin: ${({ content, theme }) => !!content ? theme.spacing(0, 0, 0, 2) : theme.spacing(0) };
    }
    
    ${({ size, theme, content, oneIcon }) => {
      if (oneIcon && !content) {
        css`
          && {
            padding: ${theme.spacing(3, 3)} !important;
            .icon_wrapper {
              width: 20px;
              height: 20px;
              display: grid;
              place-items: center;
            }
          }
      `;
      }

      if (size === "xs") {
        return css`
          font-size: ${theme.typography.button.fontSizeXs};
          padding: ${({ content }) => !(!!content) ? "5px" : "5px 7px" };

          .icon_wrapper {
            display: grid;
            place-items: center;
            width: 12px;
            height: 12px; 
          }
        `;
      }

      if (size === "sm") {
        return css`
          font-size: ${theme.typography.button.fontSizeSm};
          padding: ${({ content }) => !(!!content) ? "8px" : "8px 23px" };

          .icon_wrapper {
            display: grid;
            place-items: center;
            width: 14px;
            height: 14px;
          }
        `;
      }

      if (size === "md") {
        return css`
          font-size: ${theme.typography.button.fontSizeMd};
          padding: ${({ content }) => !(!!content) ? "9.5px" : "9.5px 15px" };

          .icon_wrapper {
            display: grid;
            place-items: center;
            width: 20px;
            height: 20px;
          }
        `;
      }

      if (size === "lg") {
        return css`
          font-size: ${theme.typography.button.fontSizeLg};
          padding: ${({ content }) => !(!!content) ? "13.5px" : "13.5px 23px" };

          .icon_wrapper {
            display: grid;
            place-items: center;
            width: 22px;
            height: 22px;
          }
        `;
      }
    }}

    ${(theme) => DISPLAY(theme)}
    ${(theme) => SPACER(theme)}
  }
`;

const getIconSize = (buttonSize) => {
  switch (buttonSize) {
    case "lg":
      return "lg";
    case "md":
      return "md";
    default:
      return "sm"
  }
};

export const ButtonBase = forwardRef(
  (
    {
      colors,
      color,
      content,
      children,
      loading,
      endIconPrefix,
      href,
      icon,
      startIcon,
      endIcon,
      iconProps,
      size,
      startIconPrefix,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const iconSize = getIconSize(size, content, children);

    return (
      <StyledButton
        component={href ? "a" : "button"}
        href={href}
        size={size}
        ref={ref}
        icon={icon}
        startIcon={startIcon}
        endIcon={endIcon}
        content={content}
        {...props}
      >
        {loading ? (
          <DotsSpinner color={colors?.color} />
        ) : (
          <>
            {startIcon && (
              <div className="icon_wrapper start_icon">
                <Icon
                  color={color}
                  icon={startIcon}
                  prefix={startIconPrefix && startIconPrefix}
                  size={iconSize}
                />
              </div>
            )}
            {icon &&
              <div className="icon_wrapper">
                <Icon
                  color={color}
                  icon={icon}
                  size={iconSize}
                  {...iconProps}
                />
              </div>
            }
            <span>{content || children}</span>
            {endIcon && (
              <div className="icon_wrapper end_icon">
                <Icon
                  color={color}
                  icon={endIcon}
                  prefix={endIconPrefix && endIconPrefix}
                  size={iconSize}
                />
              </div>
            )}
          </>
        )}
      </StyledButton>
    );
  }
);

ButtonBase.propTypes = ButtonBasePropTypes;

ButtonBase.defaultProps = ButtonBaseDefaultProps;
