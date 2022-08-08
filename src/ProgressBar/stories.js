import React from "react";
import { ProgressBar } from ".";

export default {
  title: "ProgressBar",
};

export const main = () => {
  const defaultProps = {
    value: 80,
    total: 100,
  };

  return <ProgressBar {...defaultProps} />;
};
