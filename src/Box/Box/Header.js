import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { H3, H4, Icon, Tab, Text } from "../..";
import { Flex } from "../../Flex";
import { useMediaQuery } from "../../hooks";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-bottom: 2px solid ${({ theme }) => theme.palette.gray.regular};
  border-radius: 16px 16px 0 0;

  ${({ transparentSm, theme }) =>
    transparentSm &&
    css`
      ${theme.breakpoints.down("sm")} {
        background-color: transparent;
        border-bottom: none;
      }
    `}
`;

const StyledBoxHeader = styled(Flex).attrs(() => ({
  container: true,
  justify: "space-between",
  wrap: "nowrap",
}))`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ padding, theme }) => theme.spacing(padding)};
  border-radius: 16px !important;

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      word-break: break-all;
    }
  `}

  ${({ transparentSm, theme }) =>
    transparentSm &&
    css`
      ${theme.breakpoints.down("sm")} {
        background-color: transparent;
        padding: ${theme.spacing(0)};
      }
    `}
`;

const Content = styled.div`
  ${({ padding, theme }) => css`
    padding: ${theme.spacing(0, padding)};

    ${theme.breakpoints.down("sm")} {
      padding: ${theme.spacing(0, padding)};
    }
  `}
`;

export const BoxHeader = ({
  action,
  actionIcon,
  actionIconProps,
  actionIconSize,
  renderAction,
  renderTitle,
  metaTitle,
  metaTitleColor,
  subTitle,
  subTitleColor,
  tabs,
  tabsProps,
  title,
  titleIcon,
  titleIconHiddenSm,
  titleIconProps,
  titleSize,
  transparentSm,
  ...props
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const showTitleIcon = isMobile ? !titleIconHiddenSm : !!titleIcon;
  if (!renderTitle() && !renderAction() && !title) return null;

  return (
    <Wrapper transparentSm={transparentSm}>
      <StyledBoxHeader transparentSm={transparentSm} {...props}>
        <StyledFlex item>
          {renderTitle() || (
            <Flex container>
              {showTitleIcon && (
                <Icon
                  colorBlack
                  icon={titleIcon}
                  mr={2}
                  size="lg"
                  {...titleIconProps}
                />
              )}

              <div>
                {metaTitle && (
                  <Text
                    content={metaTitle}
                    color={metaTitleColor || "text"}
                    dBlock
                    gutterBottom
                    fontWeight="normal"
                    fontSize="sm"
                  />
                )}

                {titleSize === "sm" ? (
                  <H4 content={title} />
                ) : (
                  <H3 content={title} />
                )}

                {subTitle && (
                  <Text
                    content={subTitle}
                    color={subTitleColor}
                    dBlock
                    fontStyle="italic"
                    fontSize="sm"
                  />
                )}
              </div>
            </Flex>
          )}
        </StyledFlex>

        <StyledFlex item>
          {renderAction() ||
            (actionIcon && (
              <Icon
                colorGrayMedium
                icon={actionIcon}
                size={actionIconSize}
                onClick={action}
                {...actionIconProps}
              />
            ))}
        </StyledFlex>
      </StyledBoxHeader>
      {tabs.length > 0 && (
        <Content transparentSm={transparentSm} {...props}>
          <Tab tabs={tabs} mb={0} {...tabsProps} />
        </Content>
      )}
    </Wrapper>
  );
};

const StyledFlex = styled(Flex)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;

BoxHeader.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionIconProps: PropTypes.shape({}),
  actionIconSize: PropTypes.string,
  metaTitle: PropTypes.string,
  metaTitleColor: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  tabsProps: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleIconHiddenSm: PropTypes.bool,
  titleIconProps: PropTypes.shape({}),
  titleSize: PropTypes.string,
  transparentSm: PropTypes.bool.isRequired,
};

BoxHeader.defaultProps = {
  action: () => {
  },
  actionIcon: "",
  actionIconProps: {},
  actionIconSize: "lg",
  metaTitle: "",
  metaTitleColor: "",
  renderAction: () => {
  },
  renderTitle: () => {
  },
  subTitle: "",
  subTitleColor: "textSecondary",
  tabs: [],
  tabsProps: {},
  titleIcon: "",
  titleIconHiddenSm: false,
  titleIconProps: {},
  titleSize: "md",
};
