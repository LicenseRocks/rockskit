import React from "react";
import styled, { css } from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex, HideOnScroll, PageLoading } from "../../..";
import { MainHeader, SecondaryHeader, CreatorsHubFooter } from "../Common";
import {
  CreatorsHubMainLayoutPropTypes,
  CreatorsHubMainLayoutDefaultProps,
} from "./props";

const PRIMARY_HEADER_HEIGHT = 80;
const PRIMARY_HEADER_HEIGHT_SM = 72;
const TOTAL_HEADER_HEIGHT = 160;
const TOTAL_HEADER_HEIGHT_SM = 136;

const FluidContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: false,
}))`
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}

  ${({ white }) =>
    white &&
    css`
      background-color: ${({ theme }) => theme.palette.common.white};
    `}

  ${({ offsetTop, offsetTopSm, sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: ${offsetTop ? `${offsetTop}px` : 0};
      right: 0;
      left: 0;
      width: 100%;

      ${({ theme }) => theme.breakpoints.down("sm")} {
        top: ${offsetTopSm ? `${offsetTopSm}px` : 0};
      }
    `}

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(0, 4)};
  }
`;

const Container = styled(MuiContainer).attrs(() => ({
  maxWidth: "lg",
}))``;

const Content = styled.div`
  height: 100%;

  ${({ headerFixed, theme }) =>
    headerFixed &&
    css`
      padding-top: ${theme.spacing(TOTAL_HEADER_HEIGHT_SM / 4)};

      ${theme.breakpoints.up("md")} {
        padding-top: ${theme.spacing(TOTAL_HEADER_HEIGHT / 4)};
      }
    `}
`;

const MainContent = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "flex-start",
}))`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(10, 0)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 500px;
    padding: ${({ theme }) => theme.spacing(12, 0)};
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(20, 0)};
`;

export const CreatorsHubMainLayout = ({
  children,
  footer,
  footerProps,
  headerFixed,
  headerProps,
  loading,
  renderFooter,
  renderHeader,
  renderHeading,
  sidebar,
}) => {
  const renderSecondaryHeader = () => (
    <FluidContainer
      sticky={headerFixed}
      offsetTop={PRIMARY_HEADER_HEIGHT}
      offsetTopSm={PRIMARY_HEADER_HEIGHT_SM}
      white
      zIndex={98}
    >
      <Container>
        <SecondaryHeader
          fixed={headerProps.fixed}
          secondaryHasBorder={headerProps.secondaryHasBorder}
          secondaryHideOnScroll={headerProps.secondaryHideOnScroll}
          secondaryNavItems={headerProps.secondaryNavItems}
          secondaryRenderRight={headerProps.secondaryRenderRight}
        />
      </Container>
    </FluidContainer>
  );

  return (
    <>
      {loading && <PageLoading fullScreen />}

      <FluidContainer sticky={headerFixed} white zIndex={99}>
        <Container>
          {renderHeader() || (
            <MainHeader
              fixed={headerFixed}
              height={PRIMARY_HEADER_HEIGHT}
              heightSm={PRIMARY_HEADER_HEIGHT_SM}
              {...headerProps}
            />
          )}
        </Container>
      </FluidContainer>

      {headerProps.secondary && (
        <>
          {headerProps.secondaryHideOnScroll ? (
            <HideOnScroll threshold={PRIMARY_HEADER_HEIGHT_SM - 8}>
              {renderSecondaryHeader()}
            </HideOnScroll>
          ) : (
            renderSecondaryHeader()
          )}
        </>
      )}

      <Content headerFixed={headerFixed}>
        {renderHeading && <Heading>{renderHeading()}</Heading>}

        <FluidContainer>
          <Container>
            <MainContent spacing={sidebar ? 8 : false}>
              <Flex item xs={12} md={sidebar ? 10 : 12}>
                {children}
              </Flex>

              {sidebar && (
                <Flex item xs={12} md={2}>
                  {sidebar}
                </Flex>
              )}
            </MainContent>
          </Container>
        </FluidContainer>
      </Content>

      {(footer || renderFooter) && (
        <FluidContainer white>
          <Container>
            {renderFooter() || <CreatorsHubFooter {...footerProps} />}
          </Container>
        </FluidContainer>
      )}
    </>
  );
};

CreatorsHubMainLayout.propTypes = CreatorsHubMainLayoutPropTypes;

CreatorsHubMainLayout.defaultProps = CreatorsHubMainLayoutDefaultProps;
