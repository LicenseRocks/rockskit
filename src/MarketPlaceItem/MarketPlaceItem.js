import React from "react";

import { MarketPlaceItemPropTypes, MarketPlaceItemDefaultProps } from "./props";
import { LegacyItem } from "./Legacy";
import { ModernItem } from "./Modern";

export const MarketPlaceItem = ({ type, ...props }) => {
  if (type === "legacy") return <LegacyItem {...props} />;

  return <ModernItem {...props} />;
};

MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;

MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;
