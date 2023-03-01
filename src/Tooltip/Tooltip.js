import React from "react";
import styled from "styled-components";
import MuiTooltip from "@material-ui/core/Tooltip";
import { TooltipDefaultProps, TooltipPropTypes } from "./props";

const StyledTooltip = styled((props) => (
  <MuiTooltip
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
  />
))`
  & .MuiTooltip-tooltip {
    background-color: ${({ theme }) => theme.palette.gray.dark};
    color: ${({ theme }) => theme.palette.common.white};
  }

  & .MuiTooltip-arrow {
    color: ${({ theme }) => theme.palette.gray.dark};
  }
`;

const StyledP = styled.p`
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing(1)};
  margin: 0;
`;

export const Tooltip = ({
  children,
  content,
  contentProps,
  renderContent,
  ...props
}) => {
  return (
    <StyledTooltip
      title={
        renderContent() || (
          <StyledP>{content}</StyledP>
        )
      }
      {...props}
    >
      <span>{children}</span>
    </StyledTooltip>
  );
};

Tooltip.propTypes = TooltipPropTypes;

Tooltip.defaultProps = TooltipDefaultProps;
