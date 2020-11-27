import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { BoxBase, DetailsTable, H3 } from "..";
import { Flex } from "../Flex";
import { Image } from "../Image";

const Box = styled(BoxBase)`
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

const StyledItem = styled(Flex).attrs(() => ({
  item: true,
}))`
  width: 100%;
  height: ${({ height }) => height || 116}px;
  background-color: ${({ theme }) => theme.palette.gray.regular};
  outline: 4px solid white;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const CollectionItem = ({
  details,
  largeImageUrl,
  name,
  smallImagesUrls,
  ...props
}) => {
  return (
    <Box {...props}>
      <Flex container spacing={1}>
        <StyledItem height={230} xs={12}>
          <StyledImage height={230} src={largeImageUrl} />
        </StyledItem>

        <StyledItem xs={4}>
          {smallImagesUrls[0] && <StyledImage src={smallImagesUrls[0]} />}
        </StyledItem>

        <StyledItem xs={4}>
          {smallImagesUrls[1] && <StyledImage src={smallImagesUrls[1]} />}
        </StyledItem>

        <StyledItem xs={4}>
          {smallImagesUrls[2] && <StyledImage src={smallImagesUrls[2]} />}
        </StyledItem>
      </Flex>

      <Content>
        <H3 content={name} mb={4} noWrap />

        <DetailsTable justifyBetween rows={details} />
      </Content>
    </Box>
  );
};

CollectionItem.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string),
  largeImageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  smallImagesUrls: PropTypes.arrayOf(PropTypes.string),
};

CollectionItem.defaultProps = {
  details: [],
  smallImagesUrls: [],
};
