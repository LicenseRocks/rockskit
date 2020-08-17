import React from "react";
import styled from "styled-components";

import { BoxBase } from "..";
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
  ...props
}) => {
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

      <BoxContent padding={padding}>{children}</BoxContent>

      <BoxFooter
        action={footerAction}
        actionDisabled={footerActionDisabled}
        actionLoading={footerActionLoading}
        actionTitle={footerActionTitle}
        padding={padding}
        renderAction={footerRenderAction}
        renderTitle={footerRenderTitle}
      />
    </BoxBase>
  );
};

Box.propTypes = BoxPropTypes;

Box.defaultProps = BoxDefaultProps;
