import React from "react";
import styled from "styled-components";

import { DISPLAY, SPACER } from "../theme";
import { PageFigurePropTypes, PageFigureDefaultProps } from "./props";

const StyledPageFigure = styled.div`
  width: 100vw;
  margin-left: calc((100% - 100vw) / 2);

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const PageFigure = ({ content, children, ...props }) => {
  return <StyledPageFigure {...props}>{content || children}</StyledPageFigure>;
};

PageFigure.propTypes = PageFigurePropTypes;

PageFigure.defaultProps = PageFigureDefaultProps;
