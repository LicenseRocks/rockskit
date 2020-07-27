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
  height: 32px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Label = styled(Text).attrs(() => ({
  color: "textSecondary",
}))`
  flex: 0 140px;
`;

export const DetailsTable = ({ rows, ...props }) => {
  return (
    <Wrapper {...props}>
      {rows.map(({ label, value }) => (
        <Row key={`${label}:${value}`}>
          <Label content={label} />
          {value}
        </Row>
      ))}
    </Wrapper>
  );
};

DetailsTable.propTypes = DetailsTablePropTypes;

DetailsTable.defaultProps = DetailsTableDefaultProps;
