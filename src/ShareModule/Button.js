import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ButtonBase, Icon } from "..";

const Button = styled(ButtonBase)`
  display: flex;
  align-items: center;

  && {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    svg {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const ShareModuleButton = ({ href, icon, iconPrefix }) => {
  return (
    <Button href={href} target="_blank">
      <Icon icon={icon} prefix={iconPrefix} size="lg" />
    </Button>
  );
};

ShareModuleButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
};

ShareModuleButton.defaultProps = {
  iconPrefix: "fab",
};
