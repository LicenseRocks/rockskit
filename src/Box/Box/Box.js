import React from "react";
import styled, { css } from "styled-components";

import {
  Alert,
  BoxBase,
  PageLoading,
  PageTransition,
  useMediaQuery,
} from "../..";
import { BoxFooter } from "./Footer";
import { BoxHeader } from "./Header";
import { BoxPropTypes, BoxDefaultProps } from "./props";

const BoxContent = styled.div`
  ${({ contentPadding, padding, theme }) => css`
    padding: ${theme.spacing(
      padding,
      padding,
      padding,
      contentPadding ? 20 : padding
    )};

    ${theme.breakpoints.down("sm")} {
      padding: ${theme.spacing(padding)};
    }
  `}

  ${({ padding, transparentSm, theme }) =>
    transparentSm &&
    css`
      ${theme.breakpoints.down("sm")} {
        padding: ${theme.spacing(padding, 0)};
      }
    `}
`;

export const Box = ({
  alert,
  alertColor,
  children,
  contentPadding,
  footerAction,
  footerActionLoading,
  footerActionDisabled,
  footerActionSize,
  footerActionTitle,
  footerActionType,
  footerRenderAction,
  footerRenderTitle,
  headerAction,
  headerActionIcon,
  headerActionIconProps,
  headerActionIconSize,
  headerMetaTitle,
  headerMetaTitleColor,
  headerRenderAction,
  headerRenderTitle,
  headerSubTitle,
  headerSubTitleColor,
  headerTitle,
  headerTitleIcon,
  headerTitleIconHiddenSm,
  headerTitleIconProps,
  headerTitleSize,
  loading,
  loadingMessage,
  loadingProps,
  padding,
  tabs,
  tabsProps,
  transition,
  transparentSm,
  ...props
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const content = (
    <>
      {alert && (
        <Alert
          content={alert}
          color={alertColor}
          rounded={isMobile && transparentSm}
          mt={isMobile && transparentSm ? 6 : 0}
        />
      )}
      <BoxContent
        padding={padding}
        contentPadding={contentPadding}
        transparentSm={transparentSm}
      >
        {children}
      </BoxContent>

      <BoxFooter
        action={footerAction}
        actionDisabled={footerActionDisabled}
        actionLoading={footerActionLoading}
        actionSize={footerActionSize}
        actionTitle={footerActionTitle}
        actionType={footerActionType}
        contentPadding={contentPadding}
        padding={padding}
        renderAction={footerRenderAction}
        renderTitle={footerRenderTitle}
        transparentSm={transparentSm}
      />
    </>
  );

  return (
    <BoxBase transparentSm={transparentSm} {...props}>
      {loading && (
        <PageLoading
          message={loadingMessage}
          transparent
          fullScreen={isMobile && transparentSm}
          {...loadingProps}
        />
      )}

      <BoxHeader
        action={headerAction}
        actionIcon={headerActionIcon}
        actionIconProps={headerActionIconProps}
        actionIconSize={headerActionIconSize}
        contentPadding={contentPadding}
        padding={padding}
        metaTitle={headerMetaTitle}
        metaTitleColor={headerMetaTitleColor}
        renderAction={headerRenderAction}
        renderTitle={headerRenderTitle}
        subTitle={headerSubTitle}
        subTitleColor={headerSubTitleColor}
        tabs={tabs}
        tabsProps={tabsProps}
        title={headerTitle}
        titleIcon={headerTitleIcon}
        titleIconHiddenSm={headerTitleIconHiddenSm}
        titleIconProps={headerTitleIconProps}
        titleSize={headerTitleSize}
        transparentSm={transparentSm}
      />

      {transition ? <PageTransition>{content}</PageTransition> : content}
    </BoxBase>
  );
};

Box.propTypes = BoxPropTypes;

Box.defaultProps = BoxDefaultProps;
