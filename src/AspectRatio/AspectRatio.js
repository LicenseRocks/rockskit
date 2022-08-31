import React, { Children, forwardRef } from "react";
import styled from "styled-components";

export function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => (item === null ? null : mapper(item)));
  }

  if (typeof prop === "object" && prop !== null) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

const AspectRatioWrapper = styled.div`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth};

  &::before {
    height: 0;
    content: "";
    display: block;
    padding-bottom: ${({ ratio }) =>
      mapResponsive(ratio, (r) => `${(1 / r) * 100}%`)};
  }

  & > *:not(style) {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  & > img,
  & > video {
    object-fit: cover;
  }
`;

export const AspectRatio = forwardRef(({ children, ratio, maxWidth }, ref) => {
  const child = Children.only(children);
  return (
    <AspectRatioWrapper ratio={ratio} ref={ref} maxWidth={maxWidth}>
      {child}
    </AspectRatioWrapper>
  );
});
