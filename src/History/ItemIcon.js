import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../Icon";

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border: solid 2px ${({ theme }) => theme.palette.paleLalic};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-sizing: border-box;
  position: relative;
  &::before {
    content: "";
    border-left: 2px solid ${({ theme }) => theme.palette.paleLalic};
    width: 0;
    position: absolute;
    top: -8px;
    height: 8px;
    left: 50%;
  }
`;

const ItemIcon = ({ type }) => {
  let color;
  let bgColor;
  let icon;
  switch (type) {
    case "updated":
    case "published":
    case "created":
      color = "#fff";
      bgColor = "#ac00fc";
      icon = "plus";
      break;
    case "price_updated":
    case "amount_updated":
      color = "#ac00fc";
      bgColor = "#fff";
      icon = "store";
      break;
    case "verified":
      color = "#9FE0AB";
      bgColor = "#E2FFE8";
      icon = "check-circle";
      break;
    case "document_removed":
      color = "#fe3118";
      bgColor = "#fff";
      icon = "file-export";
      break;
    case "document_added":
      color = "#B6B5C8";
      bgColor = "#fff";
      icon = "file-edit";
      break;
    case "unarchived":
      color = "#B6B5C8";
      bgColor = "#fff";
      icon = "inbox-out";
      break;
    case "version_updated":
      color = "#bfa700";
      bgColor = "rgba(255, 233, 78, 0.15);";
      icon = "arrow-to-top";
      break;
    case "archived":
      color = "#B6B5C8";
      bgColor = "#fff";
      icon = "inbox-in";
      break;
    case "line_item_refunded":
      color = "#9FE0AB";
      bgColor = "#E2FFE8";
      icon = "file-invoice-dollar";
      break;
    default:
      color = "";
  }
  return (
    <IconWrapper bgColor={bgColor}>
      <Icon icon={icon} color={color} />
    </IconWrapper>
  );
};

ItemIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ItemIcon;
