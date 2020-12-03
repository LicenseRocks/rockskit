import React, { useState } from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Pagination } from ".";

export default {
  title: "Pagination",
  decorators: [StoryWrapper],
};

export const main = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultProps = {
    currentPage,
    onChange: (e, page) => setCurrentPage(page),
    pageCount: 5,
    ...props,
  };

  return <Pagination {...defaultProps} />;
};
