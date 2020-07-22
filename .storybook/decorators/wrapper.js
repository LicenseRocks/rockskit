import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  padding: 16px;
`;

export const StoryWrapper = (story) => <StyledWrapper>{story()}</StyledWrapper>;
