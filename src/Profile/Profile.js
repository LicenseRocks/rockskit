import React from "react";
import styled, { css } from "styled-components";

import { DISPLAY, H1, Icon, Image, Paragraph, SPACER, Text } from "..";
import { Flex } from "../Flex";
import { ProfilePropTypes, ProfileDefaultProps } from "./props";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const Avatar = styled(Image).attrs(() => ({
  mb: 6,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background-color: ${({ colorPrimary, theme }) =>
    colorPrimary ? theme.palette.primary.main : theme.palette.common.white};
  color: ${({ colorPrimary, theme }) =>
    colorPrimary ? theme.palette.common.white : theme.palette.text.primary};

  svg {
    color: ${({ colorPrimary, theme }) =>
      colorPrimary ? theme.palette.common.white : theme.palette.text.primary};
  }

  :hover {
    opacity: 0.7;
  }

  ${({ fixed, offset }) =>
    fixed &&
    css`
      position: absolute;
      top: ${offset}px;
      right: ${offset}px;
    `}
`;

export const Profile = ({
  coverSrc,
  description,
  location,
  name,
  shareOnClick,
  shareUrl,
  socialLinks,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <AvatarWrapper>
        <Avatar src={coverSrc} alt={name} />

        {(shareOnClick || shareUrl) && (
          <Social
            as={shareOnClick ? "button" : "a"}
            colorPrimary
            fixed
            href={shareUrl}
            onClick={shareOnClick}
            offset={-16}
            target="_blank"
          >
            <Icon icon="share-alt" />
          </Social>
        )}
      </AvatarWrapper>

      <H1 content={name} mb={2} />

      <Text
        color="textSecondary"
        content={location}
        fontSize="sm"
        fontStyle="static"
        mb={6}
      />

      <Paragraph
        color="textSecondary"
        content={description}
        fontWeight="light"
      />

      {socialLinks.length > 0 && (
        <Flex container justify="center" spacing={2}>
          {socialLinks.map(({ icon, iconPrefix, url }) => (
            <Flex item key="icon">
              <Social href={url} target="_blank">
                <Icon icon={icon} prefix={iconPrefix || "fab"} />
              </Social>
            </Flex>
          ))}
        </Flex>
      )}
    </Wrapper>
  );
};

Profile.propTypes = ProfilePropTypes;

Profile.defaultProps = ProfileDefaultProps;
