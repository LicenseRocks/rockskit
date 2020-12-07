import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  padding: 16px;
  background-color: #fff;
`;

export const StoryWrapper = (story) => <StyledWrapper>{story()}</StyledWrapper>;
