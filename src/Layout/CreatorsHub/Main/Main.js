import React from "react";
import styled, { css } from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex } from "../../..";
import { CreatorsHubHeader } from "../Common";
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
}))`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(12, 0)};
`;

const Footer = styled.div`
  height: 70px;
  width: 100%;
  text-align: center;
`;

export const CreatorsHubMainLayout = ({
  children,
  footer,
  headerProps,
  sidebar,
}) => {
  return (
    <>
      <FluidContainer white>
        <Container>
          <CreatorsHubHeader {...headerProps} />
        </Container>
      </FluidContainer>

      <FluidContainer>
        <Container>
          <Content spacing={8}>
            <Flex item xs={12} md={!sidebar ? 12 : 10}>
              {children}
            </Flex>

            {sidebar && (
              <Flex item xs={12} md={2}>
                {sidebar}
              </Flex>
            )}
          </Content>

          {footer && <Footer>{footer}</Footer>}
        </Container>
      </FluidContainer>
    </>
  );
};

CreatorsHubMainLayout.propTypes = CreatorsHubMainLayoutPropTypes;

CreatorsHubMainLayout.defaultProps = CreatorsHubMainLayoutDefaultProps;
