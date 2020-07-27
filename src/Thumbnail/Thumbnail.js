import React, { useState } from "react";
import styled from "styled-components";

import { DISPLAY, Icon, Image, SPACER } from "..";
import { ImageModal } from "./ImageModal";
import { ThumbnailPropTypes, ThumbnailDefaultProps } from "./props";

const Container = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const StyledIcon = styled(Icon)`
  color: ${({ color, theme }) => !color && theme.palette.common.white};
`;

export const Thumbnail = ({ hasPreview, imgSrc, onClick, ...props }) => {
  const [loadError, setLoadError] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleClick = () => {
    if (hasPreview) setPreviewOpen(true);
    else onClick();
  };

  return (
    <>
      <Container onClick={handleClick} {...props}>
        {loadError ? (
          <StyledIcon color="secondary" icon="file" size="lg" />
        ) : (
          <>
            <IconWrapper>
              <StyledIcon icon="search-plus" />
            </IconWrapper>
            <Image
              cover
              src={imgSrc}
              alt="Thumbnail"
              onError={() => setLoadError(true)}
              width="48px"
            />
          </>
        )}
      </Container>

      {hasPreview && (
        <ImageModal
          imgSrc={imgSrc}
          isOpen={previewOpen}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  );
};

Thumbnail.propTypes = ThumbnailPropTypes;

Thumbnail.defaultProps = ThumbnailDefaultProps;
