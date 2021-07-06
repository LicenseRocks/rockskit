import React from "react";
import styled, { useTheme } from "styled-components";

import { RocksSpinner, Text } from "..";
import { PageLoadingPropTypes, PageLoadingDefaultProps } from "./props";

const StyledLoading = styled.div`
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  left: 0;
  min-width: ${({ fullScreen }) => (fullScreen ? "100vw" : "100%")};
  min-height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  width: 100%;
  height: 100%;
  background-color: ${({ transparent, theme }) =>
    transparent ? "rgba(0, 0, 0, 0.3)" : theme.palette.common.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${({ fullScreen }) => (fullScreen ? 9999 : 99)};

  img {
    max-width: 25%;
  }
`;

export const PageLoading = ({ message, ...props }) => {
  const { loadingIndicator } = useTheme();
  let msg = message;
  let Spinner = RocksSpinner;
  if (loadingIndicator !== undefined) {
    if (loadingIndicator === "") {
      Spinner = () => null;
      msg = "Loading...";
    } else Spinner = () => <img alt="Loading..." src={loadingIndicator} />;
  }

  return (
    <StyledLoading {...props}>
      <Spinner />

      {msg && <Text color="primary" content={msg} fontWeight="bold" mt={4} />}
    </StyledLoading>
  );
};

PageLoading.propTypes = PageLoadingPropTypes;

PageLoading.defaultProps = PageLoadingDefaultProps;
