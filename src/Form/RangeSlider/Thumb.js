/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

import { Text } from "../..";

export const Thumb = ({ renderValue, renderValueText, ...props }) => {
  const currentVal = props["aria-valuenow"] || "0";

  return (
    <span {...props}>
      {renderValue(currentVal) || (
        <Text
          content={renderValueText(currentVal) || String(currentVal)}
          fontSize="sm"
          fontWeight="bold"
        />
      )}
    </span>
  );
};

Thumb.propTypes = {
  renderValue: PropTypes.func,
  renderValueText: PropTypes.func,
};

Thumb.defaultProps = {
  renderValue: () => {},
  renderValueText: () => {},
};
