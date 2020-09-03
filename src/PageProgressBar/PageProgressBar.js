import React, { useEffect, useState } from "react";
import { NProgress } from "@tanem/react-nprogress";

import { Progress } from "./Progress";

import { PageProgressBarPropTypes, PageProgressBarDefaultProps } from "./props";

export const PageProgressBar = ({ isAnimating, instanceKey, listener }) => {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [loadingKey, setLoadingKey] = useState(new Date().getTime());

  const routeChangeStartHandler = () => {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  const routeChangeEndHandler = () => {
    setIsRouteChanging(false);
  };

  useEffect(() => {
    if (listener) {
      listener(routeChangeStartHandler, routeChangeEndHandler);
    }
  }, []);

  return <Progress isAnimating={isRouteChanging || isAnimating} />;
};

PageProgressBar.propTypes = PageProgressBarPropTypes;

PageProgressBar.defaultProps = PageProgressBarDefaultProps;
