import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ButtonBase } from "..";

const Button = styled(ButtonBase)`
  display: flex;
  align-items: center;

  && {
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    margin-right: ${({ theme }) => theme.spacing(2)};
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

export const ShareModuleButton = ({
  buttonProps,
  href,
  icon,
  iconPrefix,
  onClick,
}) => (
  <Button
    href={href}
    icon={icon}
    iconProps={{
      prefix: iconPrefix,
    }}
    noPadding
    onClick={onClick}
    target="_blank"
    {...buttonProps}
  />
);

ShareModuleButton.propTypes = {
  buttonProps: PropTypes.shape({}),
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
  onClick: PropTypes.func,
};

ShareModuleButton.defaultProps = {
  buttonProps: {},
  href: null,
  iconPrefix: "fab",
  onClick: null,
};
