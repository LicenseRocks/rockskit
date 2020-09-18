import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Link as MuiLink } from "@material-ui/core";

import { Icon, Text, TinyBadge } from "..";

const Section = styled(Grid).attrs(({ md, xs }) => ({
  item: true,
  md: md || 3,
  xs: xs || 6,
}))`
  ${({ align }) => align && `text-align: ${align}`};
`;

const Link = styled(MuiLink).attrs(() => ({
  underline: "none",
}))`
  && {
    font-weight: 500;
    color: ${({ theme }) => theme.palette.gray.regular};
    ${({ size }) => size && `font-size: ${size}px`};
  }
`;

export const ItemContent = ({
  item: {
    badge,
    badgeColor,
    icon,
    iconSize,
    link,
    linkSize,
    linkText,
    mainText,
    mainTextSize,
    skip,
    text,
    textSize,
    ...item
  },
}) => {
  return (
    <Section {...item}>
      {skip && ""}

      {icon && (
        <Icon dInline color="secondary" icon={icon} size={iconSize} mr={2} />
      )}

      {mainText && <Text content={mainText} dInline fontWeight="bold" />}

      {text && (
        <Text color="textSecondary" dInline size="sm">
          {text}
        </Text>
      )}

      {link && (
        <Link href={link} size={linkSize}>
          {linkText}
        </Link>
      )}

      {badge && <TinyBadge color={badgeColor} label={badge} />}
    </Section>
  );
};

ItemContent.propTypes = {
  item: PropTypes.shape({
    badge: PropTypes.string,
    badgeColor: PropTypes.string,
    icon: PropTypes.shape({}),
    iconSize: PropTypes.number,
    link: PropTypes.string,
    linkSize: PropTypes.number,
    linkText: PropTypes.string,
    mainText: PropTypes.string,
    mainTextSize: PropTypes.number,
    skip: PropTypes.bool,
    text: PropTypes.string,
    textSize: PropTypes.number,
  }).isRequired,
};
