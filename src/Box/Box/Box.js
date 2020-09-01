import React from "react";
import styled from "styled-components";

import { Alert, BoxBase, PageTransition } from "../..";
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
  headerActionIconSize,
  headerMetaTitle,
  headerMetaTitleColor,
  headerRenderAction,
  headerRenderTitle,
  headerSubTitle,
  headerSubTitleColor,
  headerTitle,
  headerTitleIcon,
  headerTitleSize,
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
      {headerTitle && (
        <BoxHeader
          action={headerAction}
          actionIcon={headerActionIcon}
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
          titleSize={headerTitleSize}
        />
      )}

      {transition ? <PageTransition>{content}</PageTransition> : content}
    </BoxBase>
  );
};

Box.propTypes = BoxPropTypes;

Box.defaultProps = BoxDefaultProps;
