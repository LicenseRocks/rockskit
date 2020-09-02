import React, { useEffect, useState } from "react";
import { NProgress } from "@tanem/react-nprogress";

import { Container } from "./Container";
import { Bar } from "./Bar";
import { Spinner } from "./Spinner";
import { PageProgressBarPropTypes, PageProgressBarDefaultProps } from "./props";

export const PageProgressBar = ({ isAnimating, instanceKey, listener }) => {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [loadingKey, setLoadingKey] = useState(null);

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

  return (
    <NProgress
      isAnimating={isRouteChanging || isAnimating}
      key={loadingKey || instanceKey}
    >
      {({ animationDuration, isFinished, progress }) => (
        <Container
          animationDuration={animationDuration}
          isFinished={isFinished}
        >
          <Bar animationDuration={animationDuration} progress={progress} />
          <Spinner />
        </Container>
      )}
    </NProgress>
  );
};

PageProgressBar.propTypes = PageProgressBarPropTypes;

PageProgressBar.defaultProps = PageProgressBarDefaultProps;
