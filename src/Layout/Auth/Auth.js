import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex, PageLoading } from "../..";
import { AuthLayoutHeader, AuthLayoutPropTypes } from ".";

const StyledContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: "xs",
}))`
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;

export const AuthLayout = ({
  content,
  headerLeft,
  headerBackButtonOnClick,
  headerLogoAction,
  headerLogoSrc,
  headerRight,
  headerRenderLogo,
  loading,
  ...props
}) => {
  if (loading) return <PageLoading />;

  return (
    <StyledContainer {...props}>
      <Flex container direction="column" mAuto h100 wrap="nowrap">
        <AuthLayoutHeader
          backButtonOnClick={headerBackButtonOnClick}
          headerLeft={headerLeft}
          headerRight={headerRight}
          logoAction={headerLogoAction}
          logoSrc={headerLogoSrc}
          renderLogo={headerRenderLogo}
        />

        <Content>{content}</Content>
      </Flex>
    </StyledContainer>
  );
};

AuthLayout.propTypes = AuthLayoutPropTypes;

AuthLayout.defaultProps = {};
