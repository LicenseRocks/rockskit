import React from "react";
import styled, { css } from "styled-components";
import Drawer from "@material-ui/core/Drawer";

import { Hidden } from "../../../..";
import {
  CreatorsHubHeaderPropTypes,
  CreatorsHubHeaderDefaultProps,
} from "./props";

const StyledDrawer = styled(Drawer)`
  width: 100vw;
  height: 100vh;
  && {
    top: ${({ offsetTop }) => offsetTop} !important;
  }

  .MuiPaper-root {
    box-shadow: none;
    width: 100%;
    height: 100%;
    top: ${({ offsetTop }) => offsetTop} !important;
    background-color: ${({ theme }) => theme.palette.common.white};
    padding: ${({ theme }) => theme.spacing(4, 0)};
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  width: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.secondary};
  padding-left: ${({ theme }) => theme.spacing(6)};
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.palette.text.primary};

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.text.primary};
      }

      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        border-radius: 11px;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    `}
`;

export const HeaderDrawer = ({ navItems, ...props }) => {
  return (
    <Hidden implementation="js" mdUp>
      <StyledDrawer
        ModalProps={{
          hideBackdrop: true,
        }}
        {...props}
      >
        <List>
          {navItems?.map((item) => (
            <ListItem active={item.active} key={item.key}>
              {item.render()}
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </Hidden>
  );
};

HeaderDrawer.propTypes = CreatorsHubHeaderPropTypes;

HeaderDrawer.defaultProps = CreatorsHubHeaderDefaultProps;
