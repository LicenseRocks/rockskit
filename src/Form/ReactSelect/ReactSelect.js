/**
 * React Select
 */

import React, { forwardRef } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { Controller } from "react-hook-form";
import Select from "react-select";
import AsyncSelect from "react-select/async";

// Components
import { ReactSelectDefaultProps, ReactSelectPropTypes } from "./props";

const ReactSelectWrapper = styled.div`
  flex: 1;

  .react-select__control {
    border-radius: 12px;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: ${({ theme }) => theme.spacing(0, 2)};
    height: 40px;
    box-sizing: border-box;
    box-shadow: none;
    border-color: ${({ theme }) => theme.palette.gray.regular};
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
  }

  .react-select__control--is-focused {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  .react-select__menu {
    border-radius: 12px;
  }

  .react-select__option {
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    padding: ${({ theme }) => theme.spacing(2, 4)};
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .react-select__option:hover,
  .react-select__option--is-selected {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      .react-select__control {
        border-color: ${({ theme }) => theme.palette.error.main};
      }
    `}
`;

export const ReactSelect = ({
  async,
  cacheOptions,
  control,
  defaultOptions,
  defaultValue,
  endpoint,
  endpointQueryFlag,
  error,
  errors,
  hasError,
  loadOptions,
  required,
  name,
  options,
  selectedOption,
  ...props
}) => {
  const loadOptionsfromEndpoint = (inputValue, callback) => {
    axios
      .get(
        `${endpoint}${
          endpointQueryFlag ? `?${endpointQueryFlag}=${inputValue}` : ""
        }`
      )
      .then(({ data }) =>
        callback(
          data.filter((item) => item.label.toLowerCase().includes(inputValue))
        )
      );
  };

  const Component = forwardRef((data, ref) => {
    return async ? (
      <AsyncSelect
        defaultOptions={defaultOptions}
        loadOptions={endpoint ? loadOptionsfromEndpoint : loadOptions}
        cacheOptions={cacheOptions}
        ref={ref}
        {...data}
      />
    ) : (
      <Select ref={ref} {...data} />
    );
  });

  const As = (
    <Component
      options={options}
      selectedOption={selectedOption}
      classNamePrefix="react-select"
      {...props}
    />
  );

  return (
    <ReactSelectWrapper hasError={hasError}>
      <Controller
        as={As}
        control={control}
        defaultValue={defaultValue}
        name={name}
        onChange={([selected]) => selected}
        rules={{ required }}
      />
    </ReactSelectWrapper>
  );
};

ReactSelect.propTypes = ReactSelectPropTypes;
ReactSelect.defaultProps = ReactSelectDefaultProps;
