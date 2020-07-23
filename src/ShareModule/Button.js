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

    :hover {
      background-color: ${({ theme }) => theme.palette.primary.light};

      svg {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const ShareModuleButton = ({ href, icon, iconPrefix, onClick }) => {
  return (
    <Button href={href} onClick={onClick} target="_blank">
      <Icon icon={icon} prefix={iconPrefix} size="lg" />
    </Button>
  );
};

ShareModuleButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
  onClick: PropTypes.func,
};

ShareModuleButton.defaultProps = {
  href: null,
  iconPrefix: "fab",
  onClick: null,
};
