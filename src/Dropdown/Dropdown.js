import React, { useRef } from "react";
import { omit } from "lodash";
import styled, { useTheme } from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import Menu from "@material-ui/core/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";

import { useMediaQuery } from "..";
import { DISPLAY, SPACER } from "../theme";
import { DropdownDefaultProps, DropdownPropTypes } from "./props";

const StyledDropdown = styled(Menu)`
  & {
    pointer-events: none;
  }

  .MuiMenu-paper {
    border-radius: 12px;
    pointer-events: all;
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledItem = styled(MenuItem)``;

const StyledDialog = styled(Dialog).attrs(() => ({
  fullScreen: true,
  hideBackdrop: true,
}))`
  && {
    .MuiDialog-paper {
      position: relative;
      background-color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

function useOpen() {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    close,
    open,
    toggle,
    isOpen,
  };
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export const Dropdown = ({
  children,
  items,
  disableOutsideClickClose,
  responsive,
  render,
  ...props
}) => {
  const theme = useTheme();
  const { close, open, toggle, isOpen } = useOpen();
  const ref = React.useRef();
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sanitizedRestProps = omit(props, "open");

  if (responsive && isMobile)
    return (
      <>
        {React.cloneElement(children, {
          onClick: () => {
            toggle();
          },
          ref,
          ...children.props,
        })}
        <StyledDialog
          fullScreen
          hideBackdrop
          open={isOpen}
          {...sanitizedRestProps}
        >
          {render({ close, toggle, open, isMobile, isOpen })}
        </StyledDialog>
      </>
    );

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => {
          toggle();
        },
        ref,
        ...children.props,
      })}

      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (!disableOutsideClickClose) {
            if (
              document.elementsFromPoint(x, y).reverse().pop() === ref.current
            ) {
              return;
            }

            if (isOpen) {
              close();
            }
          }
        }}
      >
        <StyledDropdown open={isOpen} {...sanitizedRestProps}>
          {render
            ? render({ close, toggle, open, isMobile, isOpen })
            : items.map(({ label, onClick, value, ...itemProps }) => (
                <StyledItem
                  key={label}
                  onClick={() => onClick(value)}
                  {...itemProps}
                >
                  {label}
                </StyledItem>
              ))}
        </StyledDropdown>
      </ClickAwayListener>
    </>
  );
};

Dropdown.propTypes = DropdownPropTypes;

Dropdown.defaultProps = DropdownDefaultProps;
