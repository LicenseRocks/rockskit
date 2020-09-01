import React from "react";
import PropTypes from "prop-types";
import RCL from "react-content-loader";
import { useTheme } from "styled-components";

const WIDTH = 160;
const HEIGHT = 130;

const ICON_SIZE = 24;
const ICON_TOP = 24;

const TITLE_WIDTH = 80;
const TITLE_HEIGHT = 16;
const TITLE_TOP = ICON_SIZE + ICON_TOP + 8;

const DESC_WIDTH = 100;
const DESC_HEIGHT = 8;
const DESC_TOP = TITLE_HEIGHT + TITLE_TOP + 8;

const DESC2_WIDTH = 50;
const DESC2_HEIGHT = 8;
const DESC2_TOP = DESC_TOP + DESC_HEIGHT + 8;

export const MarketPlaceItemContentLoader = ({ subCategory }) => {
  const theme = useTheme();
  return (
    <RCL
      width={WIDTH}
      height={HEIGHT}
      backgroundColor={theme.palette.gray.light}
      foregroundColor={theme.palette.gray.regular}
      style={{
        // border: `4px solid ${theme.palette.gray.light}`,
        backgroundColor: theme.palette.gray.light,
        borderRadius: 8,
      }}
    >
      {/* Icon */}
      <rect
        x={WIDTH / 2 - ICON_SIZE / 2}
        y={ICON_TOP}
        rx={4}
        ry={4}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />

      {/* Title */}
      <rect
        x={WIDTH / 2 - TITLE_WIDTH / 2}
        y={TITLE_TOP}
        rx={0}
        ry={0}
        width={TITLE_WIDTH}
        height={TITLE_HEIGHT}
      />

      {/* Description */}
      {!subCategory && (
        <>
          <rect
            x={WIDTH / 2 - DESC_WIDTH / 2}
            y={DESC_TOP}
            rx={0}
            ry={0}
            width={DESC_WIDTH}
            height={DESC_HEIGHT}
          />
          <rect
            x={WIDTH / 2 - DESC2_WIDTH / 2}
            y={DESC2_TOP}
            rx={0}
            ry={0}
            width={DESC2_WIDTH}
            height={DESC2_HEIGHT}
          />
        </>
      )}
    </RCL>
  );
};

MarketPlaceItemContentLoader.propTypes = {
  subCategory: PropTypes.bool,
};

MarketPlaceItemContentLoader.defaultProps = {
  subCategory: false,
};
