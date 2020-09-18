/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { OutlineButton, TextButton } from "../Button";

const StyledOutlineButton = styled(OutlineButton).attrs(() => ({
  size: "small",
}))`
  && {
    margin-right: 10px;
  }
`;

export const ItemActionButton = ({
  button: { onClick, title, type = "normal", ...button },
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  const Button = (props) =>
    type === "normal" ? (
      <TextButton {...props} />
    ) : (
      <StyledOutlineButton {...props} />
    );

  return (
    <Button key={title} onClick={handleClick} {...button}>
      {title}
    </Button>
  );
};

ItemActionButton.propTypes = {
  button: PropTypes.PropTypes.shape({
    onClick: PropTypes.func,
    type: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ItemActionButton;
