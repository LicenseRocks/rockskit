import React from "react";
import { ProgressBar } from ".";

export default {
  title: "ProgressBar",
};

export const main = () => {
  const defaultProps = {
    value: 20,
    total: 100,
    progressColor: "#714FF8",
  };

  return <ProgressBar {...defaultProps} />;
};
