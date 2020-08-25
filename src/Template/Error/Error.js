import React from "react";
import styled from "styled-components";

import { H1, Image, Text } from "../..";
import { ErrorTemplatePropTypes, ErrorTemplateDefaultProps } from "./props";
import Image500 from "../../assets/images/500.svg";
import Image404 from "../../assets/images/404.svg";

const ErrorWrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const StyledImage = styled(Image)`
  max-width: 750px;
  width: 100%;
`;

const getImg = (image, statusCode) => {
  switch (statusCode) {
    case 500:
      return Image500;
    case 404:
      return Image404;
    default:
      return image;
  }
};

export const ErrorTemplate = ({
  action,
  image,
  statusCode,
  subTitle,
  title,
}) => {
  const imgSrc = getImg(image, statusCode);

  return (
    <ErrorWrapper>
      {imgSrc && <StyledImage src={imgSrc} alt={title} mb={12} />}

      <H1 content={title} mb={2} />

      {subTitle && <Text content={subTitle} color="textSecondary" mb={6} />}

      {action}
    </ErrorWrapper>
  );
};

ErrorTemplate.propTypes = ErrorTemplatePropTypes;

ErrorTemplate.defaultProps = ErrorTemplateDefaultProps;
