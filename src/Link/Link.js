import React from "react";
import styled from "styled-components";

import { DISPLAY, SPACER } from "..";
import { LinkPropTypes, LinkDefaultProps } from "./props";

const StyledLink = styled.a`
  color: initial;
  text-decoration: none;

  ${({ block }) => block && "display: block;"}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Link = ({ className, children, Component, href, ...props }) => {
  return (
    <Component href={href} {...props}>
      <StyledLink className={className} href={href?.pathname || href}>
        {children}
      </StyledLink>
    </Component>
  );
};

Link.propTypes = LinkPropTypes;

Link.defaultProps = LinkDefaultProps;
