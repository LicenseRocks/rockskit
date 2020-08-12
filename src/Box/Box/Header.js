import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H4, Icon } from "../..";
import { Flex } from "../../Flex";

const StyledBoxHeader = styled(Flex).attrs(() => ({
  container: true,
  justify: "space-between",
}))`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ padding, theme }) => theme.spacing(padding)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
`;

export const BoxHeader = ({
  action,
  actionIcon,
  actionIconSize,
  renderAction,
  renderTitle,
  title,
  titleIcon,
  ...props
}) => {
  return (
    <StyledBoxHeader {...props}>
      <Flex container item xs={6}>
        {renderTitle() || (
          <>
            {titleIcon && <Icon colorBlack icon={titleIcon} mr={2} size="lg" />}
            <H4 content={title} dInlineBlock />
          </>
        )}
      </Flex>

      <Flex item>
        {renderAction() ||
          (actionIcon && (
            <Icon
              colorGrayMedium
              icon={actionIcon}
              size={actionIconSize}
              onClick={action}
            />
          ))}
      </Flex>
    </StyledBoxHeader>
  );
};

BoxHeader.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionIconSize: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleComponent: PropTypes.string,
};

BoxHeader.defaultProps = {
  action: () => {},
  actionIcon: "",
  actionIconSize: "lg",
  renderAction: () => {},
  renderTitle: () => {},
  titleIcon: "",
  titleComponent: "H3",
};
