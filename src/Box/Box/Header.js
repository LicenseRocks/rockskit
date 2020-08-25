import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H3, H4, Icon, Text } from "../..";
import { Flex } from "../../Flex";

const StyledBoxHeader = styled(Flex).attrs(() => ({
  container: true,
  justify: "space-between",
  wrap: "nowrap",
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
  subTitle,
  subTitleColor,
  title,
  titleIcon,
  titleSize,
  ...props
}) => {
  return (
    <StyledBoxHeader {...props}>
      <Flex item>
        {renderTitle() || (
          <Flex container>
            {titleIcon && <Icon colorBlack icon={titleIcon} mr={2} size="lg" />}

            {titleSize === "sm" ? (
              <H4 content={title} dInlineBlock />
            ) : (
              <H3 content={title} dInlineBlock />
            )}

            <Text
              content={subTitle}
              color={subTitleColor}
              dBlock
              fontStyle="italic"
              fontSize="sm"
            />
          </Flex>
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
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleSize: PropTypes.string,
};

BoxHeader.defaultProps = {
  action: () => {},
  actionIcon: "",
  actionIconSize: "lg",
  renderAction: () => {},
  renderTitle: () => {},
  subTitle: "",
  subTitleColor: "textSecondary",
  titleIcon: "",
  titleSize: "md",
};
