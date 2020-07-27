import React from "react";
import styled from "styled-components";

import { HistoryItem, HistoryPropTypes } from ".";
import { DISPLAY, SPACER } from "../theme";

const Container = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const History = ({ rows, ...props }) => {
  return (
    <Container {...props}>
      {rows.map((h) => (
        <HistoryItem key={h.id} data={h} />
      ))}
    </Container>
  );
};

History.propTypes = HistoryPropTypes;
