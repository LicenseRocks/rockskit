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
  ${({ contentPadding, padding, theme }) => css`
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.palette.common.white};
    padding: ${theme.spacing(4, padding, 4, contentPadding ? 20 : padding)};
    border-top: 1px solid ${theme.palette.gray.semiLight};
  `}
`;

export const BoxFooter = ({
  action,
  actionDisabled,
  actionLoading,
  actionTitle,
  actionType,
  renderAction,
  renderTitle,
  ...props
}) => {
  if (!renderTitle || !renderAction || !actionTitle) return null;

  return (
    <StyledBoxFooter {...props}>
      <Flex item sm={8}>
        {renderTitle()}
      </Flex>

      <Flex item>
        {renderAction() || (
          <Button
            content={actionTitle}
            disabled={actionDisabled}
            loading={actionLoading}
            onClick={action}
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
  actionType: "submit",
  renderAction: () => {},
  renderTitle: () => {},
};
