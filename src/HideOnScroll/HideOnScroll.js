import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import { HideOnScrollPropTypes, HideOnScrollDefaultProps } from "./props";

export const HideOnScroll = ({ children, threshold }) => {
  const trigger = useScrollTrigger({ threshold });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = HideOnScrollPropTypes;

HideOnScroll.defaultProps = HideOnScrollDefaultProps;
