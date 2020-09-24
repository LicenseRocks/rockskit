import React from "react";
import styled, { css } from "styled-components";

import { Alert, BoxBase, PageLoading, PageTransition } from "../..";
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
`;

export const Box = ({
  alert,
  alertColor,
  children,
  contentPadding,
  footerAction,
  footerActionLoading,
  footerActionDisabled,
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
  headerTitleIconProps,
  headerTitleSize,
  loading,
  loadingMessage,
  padding,
  tabs,
  tabsProps,
  transition,
  ...props
}) => {
  const content = (
    <>
      {alert && <Alert content={alert} color={alertColor} noBorderRadius />}
      <BoxContent padding={padding} contentPadding={contentPadding}>
        {children}
      </BoxContent>

      <BoxFooter
        action={footerAction}
        actionDisabled={footerActionDisabled}
        actionLoading={footerActionLoading}
        actionTitle={footerActionTitle}
        actionType={footerActionType}
        contentPadding={contentPadding}
        padding={padding}
        renderAction={footerRenderAction}
        renderTitle={footerRenderTitle}
      />
    </>
  );

  return (
    <BoxBase {...props}>
      {loading && <PageLoading message={loadingMessage} type="box" />}
      {headerTitle && (
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
          titleIconProps={headerTitleIconProps}
          titleSize={headerTitleSize}
        />
      )}

      {transition ? <PageTransition>{content}</PageTransition> : content}
    </BoxBase>
  );
};

Box.propTypes = BoxPropTypes;

Box.defaultProps = BoxDefaultProps;
