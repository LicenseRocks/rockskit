import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Image } from "../..";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 135px;
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
  object-fit: contain;
  z-index: 2;
`;

export const Cover = ({ imgSrc, ...props }) => {
  return (
    <Wrapper {...props}>
      <BGImage imgSrc={imgSrc} />
      <StyledImage src={imgSrc} />
    </Wrapper>
  );
};

Cover.propTypes = {
  imgSrc: PropTypes.string,
};

Cover.defaultProps = {
  imgSrc: "",
};
