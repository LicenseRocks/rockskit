import React from "react";
import styled from "styled-components";

import { RocksSpinner, Text } from "..";
import { PageLoadingPropTypes, PageLoadingDefaultProps } from "./props";

const StyledLoading = styled.div`
  position: ${({ type }) => (type === "page" ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  left: 0;
  width: ${({ type }) => (type === "page" ? "100vw" : "100%")};
  height: ${({ type }) => (type === "page" ? "100vh" : "100%")};
  background-color: ${({ theme, type }) =>
    type === "page" ? theme.palette.common.white : "rgba(0, 0, 0, 0.3)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PageLoading = ({ message, ...props }) => (
  <StyledLoading {...props}>
    <RocksSpinner />

    {message && <Text content={message} fontWeight="bold" mt={4} />}
  </StyledLoading>
);

PageLoading.propTypes = PageLoadingPropTypes;

PageLoading.defaultProps = PageLoadingDefaultProps;
