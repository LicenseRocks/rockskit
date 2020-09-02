import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBar = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 2px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1031;
`;

const InnerBar = styled.div`
  box-shadow: ${({ theme }) =>
    `0 0 10px ${theme.palette.primary.main}, 0 0 5px  ${theme.palette.primary.main}`};
  display: block;
  height: 100%;
  opacity: 1;
  position: absolute;
  right: 0;
  transform: rotate(3deg) translate(0px, -4px);
  width: 100;
`;

export const Bar = ({ animationDuration, progress }) => (
  <StyledBar
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  >
    <InnerBar />
  </StyledBar>
);

Bar.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};
