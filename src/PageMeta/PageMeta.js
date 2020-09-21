import React from "react";

import { pageMetaPropTypes, pageMetaDefaultProps } from "./props";

export const PageMeta = ({
  children,
  description,
  imgSrc,
  title,
  url,
  Wrapper,
}) => {
  const meta = (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} key="metaTitle" />
      <meta name="description" content={description} key="metaDesc" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" key="ogType" />
      <meta property="og:url" content={url} key="ogUrl" />
      <meta property="og:title" content={title} key="ogTitle" />
      <meta property="og:description" content={description} key="ogDesc" />
      <meta property="og:image" content={imgSrc} key="ogImage" />

      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twCard"
      />
      <meta property="twitter:url" content={url} key="twUrl" />
      <meta property="twitter:title" content={title} key="twTitle" />
      <meta property="twitter:description" content={description} key="twDesc" />
      <meta property="twitter:image" content={imgSrc} key="twImage" />

      {children}
    </>
  );

  return Wrapper ? <Wrapper>{meta}</Wrapper> : meta;
};

PageMeta.propTypes = pageMetaPropTypes;

PageMeta.defaultProps = pageMetaDefaultProps;
