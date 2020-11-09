import React, { useState } from "react";
import styled from "styled-components";

import { DISPLAY, FieldBase, SPACER } from "..";
import { SearchBarPropTypes, SearchBarDefaultProps } from "./props";

const StyledSearchBar = styled.form`
  background-color: transparent;
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
    ${({ noBorderRadius }) =>
      `border-radius: ${noBorderRadius ? "unset" : "12px"};`}
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    height: 100%;
    border: none;
    outline: none;
  }
`;

export const SearchBar = ({
  inputProps,
  noBorderRadius,
  onChange,
  onSubmit,
  placeholder,
  showSearchIconEnd,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

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

  let endIcon = null;
  if (inputValue) endIcon = "times";
  else if (showSearchIconEnd) endIcon = "search";

  let endIconColor = "input";
  if (endIcon === "search") endIconColor = "secondary";

  let startIcon = null;
  if (!showSearchIconEnd) startIcon = "search";

  return (
    <StyledSearchBar onSubmit={handleSubmit} {...props}>
      <SearchInput
        endIcon={endIcon}
        endIconColor={endIconColor}
        endIconOnClick={inputValue ? handleClear : undefined}
        noBorderRadius={noBorderRadius}
        onChange={handleChange}
        placeholder={placeholder}
        startIcon={startIcon}
        startIconColor="secondary"
        value={inputValue}
        {...inputProps}
      />
    </StyledSearchBar>
  );
};

SearchBar.propTypes = SearchBarPropTypes;

SearchBar.defaultProps = SearchBarDefaultProps;
