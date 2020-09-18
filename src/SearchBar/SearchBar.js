import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { DISPLAY, Dropdown, FieldBase, SPACER, TextButton } from "..";
import { SearchBarPropTypes, SearchBarDefaultProps } from "./props";

const StyledSearchBar = styled.form`
  background-color: transparent;
  ${({ noBorderRadius }) => !noBorderRadius && "border-radius: 12px;"}
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const SearchInput = styled(FieldBase).attrs(() => ({
  component: "input",
}))`
  && {
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    height: 100%;
    border: none;
    outline: none;
    border-radius: unset;
  }
`;

const FilterButton = styled(TextButton)`
  && {
    margin-left: ${({ theme }) => theme.spacing(1)};
    border-radius: unset;
    background-color: ${({ theme }) => theme.palette.gray.semiLight};

    svg {
      font-size: 16px;
    }
  }
`;

export const SearchBar = ({
  filterButtonText,
  filterItems,
  onChange,
  onSubmit,
  placeholder,
  showFilter,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    if (onChange) onChange("");
    if (value && onSubmit) onSubmit("");
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit} {...props}>
      <SearchInput
        endIcon={inputValue ? "times" : null}
        endIconOnClick={handleClear}
        placeholder={placeholder}
        startIcon="search"
        startIconColor="secondary"
        value={inputValue}
        onChange={handleChange}
      />

      {showFilter && (
        <>
          <FilterButton
            content={filterButtonText}
            color="secondary"
            onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
            startIcon="filter"
          />

          <Dropdown
            anchorEl={anchorEl}
            items={filterItems.map((l) => ({
              onClick: handleClick,
              selected: l.value === current?.value,
              ...l,
            }))}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          />
        </>
      )}
    </StyledSearchBar>
  );
};

SearchBar.propTypes = SearchBarPropTypes;

SearchBar.defaultProps = SearchBarDefaultProps;
