import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Image, Modal } from "..";

const CloseModalIcon = styled(Icon).attrs(() => ({
  size: "lg",
}))`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 100%;
  && {
    margin: ${({ theme }) => theme.spacing(4)};
  }
`;

const StyledImg = styled(Image)`
  width: 100%;
  max-width: 100%;
  user-select: none;
  object-fit: cover;
`;

export const ImageModal = ({ isOpen, onClose, imgSrc }) => (
  <Modal onClose={onClose} isOpen={isOpen} maxWidth="sm">
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
