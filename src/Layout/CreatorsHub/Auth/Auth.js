import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { DISPLAY, PageLoading, SPACER } from "../../..";
import { CreatorsHubHeader } from "../Common";
import {
  CreatorsHubAuthLayoutPropTypes,
  CreatorsHubAuthLayoutDefaultProps,
} from "./props";

const StyledContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: "lg",
}))`
  && {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const InnerContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: "xs",
}))`
  && {
    flex: 1;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatorsHubAuthLayout = ({
  children,
  headerProps,
  loading,
  ...props
}) => {
  return (
    <>
      {loading && <PageLoading fullScreen />}

      <StyledContainer {...props}>
        <CreatorsHubHeader {...headerProps} />

        <InnerContainer>
          <Content>{children}</Content>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

CreatorsHubAuthLayout.propTypes = CreatorsHubAuthLayoutPropTypes;

CreatorsHubAuthLayout.defaultProps = CreatorsHubAuthLayoutDefaultProps;
