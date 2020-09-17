import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";

import { Icon, Indicator } from "..";
import { CartButtonPropTypes, CartButtonDefaultProps } from "./props";

const StyledButton = styled(ButtonBase)`
  && {
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    border-radius: 44px;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const CartButton = ({ count }) => {
  return (
    <StyledButton>
      <Icon colorGrayMedium icon="shopping-cart" />

      <Indicator content={count} ml={1} />
    </StyledButton>
  );
};

CartButton.propTypes = CartButtonPropTypes;

CartButton.defaultProps = CartButtonDefaultProps;
