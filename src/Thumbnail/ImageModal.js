import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Modal } from "..";

const CloseModalIcon = styled(Icon).attrs(() => ({
  iconSize: "lg",
}))`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 100%;
  && {
    margin: ${({ theme }) => theme.spacing(4)};
  }
`;

const StyledImg = styled.img`
  width: 500px;
  max-width: 500px;
  user-select: none;
`;

export const ImageModal = ({ isOpen, onClose, imgSrc }) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <CloseModalIcon color="secondary" icon="times" onClick={onClose} />
    <StyledImg src={imgSrc} alt="Attachment preview" />
  </Modal>
);

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imgSrc: PropTypes.string,
};

ImageModal.defaultProps = {
  imgSrc: "",
};
