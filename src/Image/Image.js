import React from "react";
import styled, { css } from "styled-components";

import { ImageDefaultProps, ImagePropTypes } from "./props";

export const Image = ({ ...props }) => {
  return <StyledImg itemProp="contentUrl" {...props} />;
};

const StyledImg = styled.img`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `width: ${height};`}

  ${({ cover }) =>
    cover &&
    css`
      height: 150px;
      object-fit: fill;
      width: 100%;
    `}

  ${({ fluid }) =>
    fluid &&
    `
    height: auto;
    max-width: 100%;
  `}

  ${({ rounded }) =>
    rounded &&
    `
    border-radius: .25rem;
  `}

  ${({ roundedCircle }) =>
    roundedCircle &&
    `
    border-radius: 50%;
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

  ${({ thumbnail, theme }) =>
    thumbnail &&
    css`
      background-color: ${theme.COLOUR.light};
      border: 1px solid ${theme.COLOUR.dark};
      border-radius: 0.25rem;
      height: auto;
      max-width: 100%;
      padding: 0.65rem;
    `}
`;

Image.propTypes = ImagePropTypes;

Image.defaultProps = ImageDefaultProps;
