import React from "react";
import styled, { css } from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex, PageLoading } from "../../..";
import { CreatorsHubHeader, CreatorsHubFooter } from "../Common";
import {
  CreatorsHubMainLayoutPropTypes,
  CreatorsHubMainLayoutDefaultProps,
} from "./props";

const FluidContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: false,
}))`
  ${({ white }) =>
    white &&
    css`
      background-color: ${({ theme }) => theme.palette.common.white};
    `}
`;

const Container = styled(MuiContainer).attrs(() => ({
  maxWidth: "lg",
}))``;

const Content = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "flex-start",
}))`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(12, 0)};
`;

export const CreatorsHubMainLayout = ({
  children,
  footer,
  footerProps,
  headerProps,
  loading,
  sidebar,
}) => {
  return (
    <>
      {loading && <PageLoading />}

      <FluidContainer white>
        <Container>
          <CreatorsHubHeader {...headerProps} />
        </Container>
      </FluidContainer>

      <FluidContainer>
        <Container>
          <Content spacing={sidebar ? 8 : false}>
            <Flex item xs={12} md={sidebar ? 10 : 12}>
              {children}
            </Flex>

            {sidebar && (
              <Flex item xs={12} md={2}>
                {sidebar}
              </Flex>
            )}
          </Content>
        </Container>
      </FluidContainer>

      {footer && (
        <FluidContainer white>
          <Container>
            <CreatorsHubFooter {...footerProps} />
          </Container>
        </FluidContainer>
      )}
    </>
  );
};

CreatorsHubMainLayout.propTypes = CreatorsHubMainLayoutPropTypes;

CreatorsHubMainLayout.defaultProps = CreatorsHubMainLayoutDefaultProps;
