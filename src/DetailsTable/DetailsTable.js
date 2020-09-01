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
  height: 32px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Label = styled(Text).attrs(() => ({
  color: "textSecondary",
}))`
  flex: 0 140px;
`;

export const DetailsTable = ({ rows, justifyBetween, ...props }) => {
  return (
    <Wrapper {...props}>
      {rows.map(({ label, value }) => (
        <Row key={`${label}:${value}`} justifyBetween={justifyBetween}>
          <Label content={label} />
          {value}
        </Row>
      ))}
    </Wrapper>
  );
};

DetailsTable.propTypes = DetailsTablePropTypes;

DetailsTable.defaultProps = DetailsTableDefaultProps;
