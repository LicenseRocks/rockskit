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
  padding-top: ${({ theme }) => theme.spacing(20)};
`;

export const AuthLayout = ({
  content,
  headerLeft,
  headerLogoAction,
  headerRight,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <Flex container direction="column" lg={4} md={6} xs={12} mAuto h100>
        <AuthLayoutHeader
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
