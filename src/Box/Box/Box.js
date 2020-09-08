import React from "react";
import styled from "styled-components";

import { Alert, BoxBase, PageLoading, PageTransition } from "../..";
import { BoxFooter } from "./Footer";
import { BoxHeader } from "./Header";
import { BoxPropTypes, BoxDefaultProps } from "./props";

const BoxContent = styled.div`
  padding: ${({ padding, theme }) => theme.spacing(padding)};
`;

export const Box = ({
  alert,
  alertColor,
  children,
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
  transition,
  ...props
}) => {
  const content = (
    <>
      {alert && <Alert content={alert} color={alertColor} noBorderRadius />}
      <BoxContent padding={padding}>{children}</BoxContent>

      <BoxFooter
        action={footerAction}
        actionDisabled={footerActionDisabled}
        actionLoading={footerActionLoading}
        actionTitle={footerActionTitle}
        actionType={footerActionType}
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
          padding={padding}
          metaTitle={headerMetaTitle}
          metaTitleColor={headerMetaTitleColor}
          renderAction={headerRenderAction}
          renderTitle={headerRenderTitle}
          subTitle={headerSubTitle}
          subTitleColor={headerSubTitleColor}
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
