import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { Icon } from "../../..";

const NestedListItem = styled(ListItem)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    display: flex;
    padding: 0;
    margin: 0;
    padding-left: ${({ theme }) => theme.spacing(12)};
    margin-bottom: 2px;
    cursor: pointer;

    &.Mui-selected {
      background: none;
      color: ${({ theme }) => theme.palette.text.primary};

      span {
        font-weight: bold;
      }

      &:hover {
        background: inherit;
      }
    }

    div {
      margin: 0;
      span {
        font-size: 14px;
      }
    }
  }
`;

const ImprovedListItem = styled(ListItem)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    flex-direction: row;
    margin-top: ${({ theme }) => theme.spacing(6)};
    height: 40px;
    padding: 0;
    cursor: pointer;

    span {
      font-size: 14px;
    }

    .MuiListItemText-root {
      margin: 0;
      .MuiTypography-root {
        font-size: 16px;
      }
    }

    &.Mui-selected {
      background: none;
      color: ${({ theme }) => theme.palette.primary.main};

      .MuiTypography-root {
        font-weight: 600;
      }

      svg {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    &.MuiListItem-root:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      background: none;

      svg {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;

const ImprovedList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: initial;
    max-height: unset;
    height: 100%;
  }
`;

const ImprovedListItemIcon = styled(ListItemIcon)`
  && {
    justify-content: center;
    align-items: center;
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: ${({ theme }) => theme.spacing(2)};
    svg {
      color: ${({ theme: thm }) => thm.palette.text.secondary};
    }
  }
`;

export const NavigationMenu = ({ items }) => (
  <ImprovedList component="nav">
    {items
      .filter((m) => (typeof m.show === "boolean" ? m.show : true))
      .map((m) => {
        const {
          title,
          selected,
          onClick,
          icon,
          additional,
          dataCy,
          nestedItems,
        } = m;
        const showNested = nestedItems && selected;
        return (
          <Fragment key={title}>
            <ImprovedListItem
              selected={selected}
              href={onClick}
              {...(dataCy ? { "data-cy": dataCy } : {})}
            >
              <ImprovedListItemIcon>
                <Icon icon={icon} />
              </ImprovedListItemIcon>
              <ListItemText primary={title} />
              {additional}
            </ImprovedListItem>
            {showNested &&
              nestedItems.map((n) => (
                <NestedListItem
                  selected={n.selected}
                  href={n.onClick}
                  key={n.title}
                >
                  <ListItemText primary={n.title} />
                </NestedListItem>
              ))}
          </Fragment>
        );
      })}
  </ImprovedList>
);

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
