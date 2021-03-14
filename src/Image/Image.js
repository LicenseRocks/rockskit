import React from "react";
import styled, { css } from "styled-components";

import { DISPLAY, SPACER } from "../theme";
import { ImageDefaultProps, ImagePropTypes } from "./props";

export const Image = ({ ...props }) => {
  return <StyledImg itemProp="contentUrl" {...props} />;
};

const StyledImg = styled.img`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}

  ${({ cover }) =>
    cover &&
    css`
      height: 100%;
      object-fit: cover;
    `}

  ${({ onClick }) =>
    onClick &&
    css`
      transition: all 100ms ease-in-out;
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

Image.propTypes = ImagePropTypes;

Image.defaultProps = ImageDefaultProps;
