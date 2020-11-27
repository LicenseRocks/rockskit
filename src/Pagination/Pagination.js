import React from "react";
import styled from "styled-components";
import MuiPagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

import { PaginationPropTypes, PaginationDefaultProps } from "./props";
import { DISPLAY, OutlineButton, SPACER } from "..";

const StyledPagination = styled(MuiPagination)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledPaginationItem = styled(PaginationItem)`
  && {
    width: 24px;
    min-width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.palette.gray.semiLight};
    border-radius: 8px;
    padding: 0;
  }
`;

const prevButton = (prevText, disabled) => (
  <OutlineButton
    content={prevText}
    color="secondary"
    disabled={disabled}
    mr={6}
    size="sm"
    startIcon="chevron-left"
  />
);

const nextButton = (nextText, disabled) => (
  <OutlineButton
    content={nextText}
    color="secondary"
    disabled={disabled}
    endIcon="chevron-right"
    ml={6}
    size="sm"
  />
);

export const Pagination = ({
  currentPage,
  itemProps,
  ItemWrapper,
  nextText,
  pageCount,
  prevText,
  ...props
}) => {
  const renderItem = (item) => {
    if (item.type === "previous")
      return prevButton(prevText, currentPage === 1);
    if (item.type === "next")
      return nextButton(nextText, currentPage === pageCount);
    return <StyledPaginationItem {...item} {...itemProps} />;
  };

  return (
    <StyledPagination
      page={currentPage}
      count={pageCount}
      renderItem={(item) =>
        ItemWrapper ? (
          <ItemWrapper page={item.page}>{renderItem(item)}</ItemWrapper>
        ) : (
          renderItem(item)
        )
      }
      {...props}
    />
  );
};

Pagination.propTypes = PaginationPropTypes;

Pagination.defaultProps = PaginationDefaultProps;
