import React from "react";
import styled from "styled-components";

import { BoxBase, PageTransition } from "../..";
import { BoxFooter } from "./Footer";
import { BoxHeader } from "./Header";
import { BoxPropTypes, BoxDefaultProps } from "./props";

const BoxContent = styled.div`
  padding: ${({ padding, theme }) => theme.spacing(padding)};
`;

export const Box = ({
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
  headerRenderAction,
  headerRenderTitle,
  headerTitle,
  headerTitleIcon,
  padding,
  transition,
  ...props
}) => {
  const content = (
    <>
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
          renderAction={headerRenderAction}
          renderTitle={headerRenderTitle}
          title={headerTitle}
          titleIcon={headerTitleIcon}
        />
      )}

      {transition ? <PageTransition>{content}</PageTransition> : content}
    </BoxBase>
  );
};

Box.propTypes = BoxPropTypes;

Box.defaultProps = BoxDefaultProps;
