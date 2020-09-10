import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/images/logo-symbol.svg";
import { Flex, Image, TextButton } from "../../..";
import {
  AuthLayoutHeaderPropTypes,
  AuthLayoutHeaderDefaultProps,
} from "./props";

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

const Item = styled(Flex).attrs(() => ({
  container: true,
  item: true,
}))`
  flex: 1%;
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
  renderLogo,
  ...props
}) => {
  const backButton = (
    <TextButton color="secondary" onClick={backButtonOnClick} size="sm">
      Back
    </TextButton>
  );

  return (
    <StyledHeader {...props}>
      <Item>{headerLeft || backButton}</Item>
      <Item justify="center">
        {renderLogo() || <StyledLogo onClick={logoAction} />}
      </Item>
      <Item justify="flex-end">{headerRight}</Item>
    </StyledHeader>
  );
};

AuthLayoutHeader.propTypes = AuthLayoutHeaderPropTypes;

AuthLayoutHeader.defaultProps = AuthLayoutHeaderDefaultProps;
