import React from "react";

import { MarketPlaceItemPropTypes, MarketPlaceItemDefaultProps } from "./props";
import { LegacyItem } from "./Legacy";
import { ModernItem } from "./Modern";
import { ModernHorizontalItem } from "./ModernHorizontal";

export const MarketPlaceItem = ({ type, ...props }) => {
  if (type === "legacy") return <LegacyItem {...props} />;
  if (type === "modernHorizontal") return <ModernHorizontalItem {...props} />;

  return <ModernItem {...props} />;
};

MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;

MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;
