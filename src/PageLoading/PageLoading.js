import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { RocksSpinner } from "..";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const duration = 1000;

export const PageLoading = (props) => (
  <StyledLoading {...props}>
    <RocksSpinner />
  </StyledLoading>
);

PageLoading.propTypes = {};

PageLoading.defaultProps = {};
