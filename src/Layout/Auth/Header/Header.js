import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/images/logo-symbol.svg";
import { Flex, Image, TextButton } from "../../..";
import { AuthLayoutHeaderPropTypes } from "./props";

const StyledHeader = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "space-between",
}))`
  flex: 0 0 120px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 0 0 96px;
  }
`;

const StyledLogo = styled(Image).attrs(() => ({
  alt: "Logo",
  src: Logo,
}))`
  width: 48px;
  height: 48px;
`;

export const AuthLayoutHeader = ({
  backButtonOnClick,
  headerLeft,
  headerRight,
  logoAction,
  ...props
}) => {
  const backButton = (
    <TextButton color="secondary" onClick={backButtonOnClick} size="sm">
      Back
    </TextButton>
  );

  return (
    <StyledHeader {...props}>
      <Flex item>{headerLeft || backButton}</Flex>
      <Flex item>
        <StyledLogo onClick={logoAction} />
      </Flex>
      <Flex item>{headerRight}</Flex>
    </StyledHeader>
  );
};

AuthLayoutHeader.propTypes = AuthLayoutHeaderPropTypes;
