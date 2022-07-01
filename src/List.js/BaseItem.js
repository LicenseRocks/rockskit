import styled from "styled-components";
import React from "react";
import { Icon } from "../Icon";
import { TinyBadge } from "../Badge";

export const ListBaseItem = ({
  value,
  title,
  info,
  price,
  icon,
  active,
  activeLabel,
  register
}) => {
  return (
    <StyledLabel
      value={value}
      name={value}
      reigster={register}
    >
      <div className="icon_wrapper">
        <Icon icon={icon} />
      </div>
      <div className="text_wrapper">
        <div className="title">
          {title}
        </div>
        <div className="description">
          {info}
          {price}
          {active && <TinyBadge color="success" label={activeLabel} />}
        </div>

      </div>
    </StyledLabel>
  );
};

const StyledLabel = styled.li`
  display: flex;
  align-items: center;
  
  .icon_wrapper {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
`