import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "../..";
import { Flex } from "../../Flex";

const StyledBoxFooter = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "space-between",
}))`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ padding, theme }) => theme.spacing(4, padding)};
  border-top: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
`;

export const BoxFooter = ({
  action,
  actionDisabled,
  actionLoading,
  actionTitle,
  renderAction,
  renderTitle,
  ...props
}) => {
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
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
};

BoxFooter.defaultProps = {
  action: () => {},
  actionDisabled: false,
  actionLoading: false,
  renderAction: () => {},
  renderTitle: () => {},
};