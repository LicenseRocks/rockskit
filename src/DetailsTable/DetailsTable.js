import React from "react";
import styled from "styled-components";

import { DetailsTablePropTypes, DetailsTableDefaultProps } from "./props";
import { Text } from "../Typography";

const Wrapper = styled.div``;

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

export const DetailsTable = ({ rows }) => {
  return (
    <Wrapper>
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
