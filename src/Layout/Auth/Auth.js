import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex } from "../..";
import { AuthLayoutHeader, AuthLayoutPropTypes } from ".";

const StyledContainer = styled(MuiContainer)`
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
  headerRight,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <Flex
        container
        direction="column"
        lg={5}
        md={8}
        xs={12}
        mAuto
        h100
        wrap="nowrap"
      >
        <AuthLayoutHeader
          backButtonOnClick={headerBackButtonOnClick}
          headerLeft={headerLeft}
          headerLogoAction={headerLogoAction}
          headerRight={headerRight}
        />

        <Content>{content}</Content>
      </Flex>
    </StyledContainer>
  );
};

AuthLayout.propTypes = AuthLayoutPropTypes;

AuthLayout.defaultProps = {};
