import React from "react";
import { boolean } from "@storybook/addon-knobs";

// UI
import { SearchBar } from ".";

export default {
  title: "SearchBar",
};

export const main = () => {
  const defaultProps = {
    onSubmit: (val) => console.log("Submit: ", val),
    showSearchIconEnd: boolean("showSearchIconEnd", false),
  };

  return <SearchBar {...defaultProps} />;
};
