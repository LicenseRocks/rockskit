import React from "react";
import styled from "styled-components";

import { DetailsTablePropTypes, DetailsTableDefaultProps } from "./props";
import { Text } from "../Typography";
import { DISPLAY, SPACER } from "../theme";

const Wrapper = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  ${({ justifyBetween }) => justifyBetween && "justify-content: space-between;"}
  height: ${({ size }) => (size === "md" ? "32px" : "16px")};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Label = styled(Text).attrs(() => ({
  color: "textSecondary",
}))`
  flex: 0 140px;
`;

export const DetailsTable = ({
  labelFontSize,
  rows,
  justifyBetween,
  size,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {rows.map(({ label, value }) => (
        <Row
          key={`${label}:${value}`}
          justifyBetween={justifyBetween}
          size={size}
        >
          <Label content={label} fontSize={labelFontSize} />
          {value || "-"}
        </Row>
      ))}
    </Wrapper>
  );
};

DetailsTable.propTypes = DetailsTablePropTypes;

DetailsTable.defaultProps = DetailsTableDefaultProps;
