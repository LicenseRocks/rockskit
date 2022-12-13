import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Button } from "../..";
import { Flex } from "../../Flex";

const StyledBoxFooter = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "space-between",
}))`
  ${({ padding, theme }) => css`
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.palette.common.white};
    padding: ${theme.spacing(4, padding, 4, padding)};
    border-top: 2px solid ${theme.palette.gray.regular};
    border-radius: 0 0 16px 16px !important;

    ${theme.breakpoints.down("sm")} {
      padding: ${theme.spacing(padding - (padding / 3), padding)};
    }
  `}

  ${({ padding, transparentSm, theme }) =>
    transparentSm &&
    css`
      ${theme.breakpoints.down("sm")} {
        background-color: transparent;
        border-top: none;
        padding: ${theme.spacing(padding - (padding / 3), padding)};
      }
    `}
`;

export const BoxFooter = ({
  action,
  actionDisabled,
  actionLoading,
  actionSize,
  actionTitle,
  actionType,
  renderAction,
  renderTitle,
  ...props
}) => {
  if (!renderTitle() && !renderAction() && !actionTitle) return null;
  
  return (
    <StyledBoxFooter {...props}>
      <Flex item>{renderTitle()}</Flex>

      <Flex item>
        {renderAction() || (
          <Button
            content={actionTitle}
            disabled={actionDisabled}
            loading={actionLoading}
            onClick={action}
            size={actionSize}
            type={actionType}
          />
        )}
      </Flex>
    </StyledBoxFooter>
  );
};

BoxFooter.propTypes = {
  action: PropTypes.func,
  actionDisabled: PropTypes.bool,
  actionLoading: PropTypes.bool,
  actionSize: PropTypes.string,
  actionTitle: PropTypes.string.isRequired,
  actionType: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
};

BoxFooter.defaultProps = {
  action: () => {},
  actionDisabled: false,
  actionLoading: false,
  actionSize: "md",
  actionType: "submit",
  renderAction: () => {},
  renderTitle: () => {},
};
