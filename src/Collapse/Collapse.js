import React from "react";
import styled from "styled-components";
import { Collapse as ReactCollapse } from "react-collapse";

import { CollapsePropTypes } from "./props";

const Wrapper = styled.div`
  .ReactCollapse--collapse {
    transition: height 200ms ease-in-out;
  }
`;

export const Collapse = (props) => {
  return (
    <Wrapper>
      <ReactCollapse {...props} />
    </Wrapper>
  );
};

Collapse.propTypes = CollapsePropTypes;
