import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Image } from "../..";

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;

export const Cover = ({ imgSrc, placeholderSrc, ...props }) => {
  return <StyledImage src={imgSrc || placeholderSrc} {...props} />;
};

Cover.propTypes = {
  imgSrc: PropTypes.string,
  placeholderSrc: PropTypes.string,
};

Cover.defaultProps = {
  imgSrc: "",
  placeholderSrc: "",
};
