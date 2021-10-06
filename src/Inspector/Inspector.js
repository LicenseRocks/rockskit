import React from "react";
import styled from "styled-components";

import { InspectorItem, InspectorPropTypes } from ".";
import { DISPLAY, SPACER } from "../theme";

const Container = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Inspector = ({ rows, ...props }) => {
  return (
    <Container {...props}>
      {rows.map((h) => (
        <InspectorItem key={h.id} data={h} />
      ))}
    </Container>
  );
};

Inspector.propTypes = InspectorPropTypes;
