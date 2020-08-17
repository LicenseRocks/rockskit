import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Transition } from "react-transition-group";

const StyledContent = styled.div`
  width: 100%;
  height: auto;
  transition: filter ${({ duration }) => duration / 2}ms ease-in-out;

  ${({ state }) => {
    switch (state) {
      case "entering":
      case "exited":
        return css`
          -webkit-filter: blur(0.75rem);
          filter: blur(0.75rem);
          pointer-events: none;
        `;
      default:
        return css`
          -webkit-filter: blur(0);
          filter: blur(0);
        `;
    }
  }};
`;

const duration = 200;

export const PageTransition = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <Transition in={mounted} timeout={duration} unmountOnExit>
      {(state) => (
        <StyledContent duration={duration} state={state} {...props}>
          {children}
        </StyledContent>
      )}
    </Transition>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

PageTransition.defaultProps = {};

export default PageTransition;
