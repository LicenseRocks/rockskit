import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Image } from "../..";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  width: 140px;
  height: 140px;
`;

const BGImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: 1;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;

export const Cover = ({ imgSrc, placeholderSrc, ...props }) => {
  return (
    <Wrapper {...props}>
      <BGImage imgSrc={imgSrc || placeholderSrc} />
      <StyledImage src={imgSrc || placeholderSrc} />
    </Wrapper>
  );
};

Cover.propTypes = {
  imgSrc: PropTypes.string,
  placeholderSrc: PropTypes.string,
};

Cover.defaultProps = {
  imgSrc: "",
  placeholderSrc: "",
};
