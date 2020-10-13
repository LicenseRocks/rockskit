/* eslint-disable react/prop-types */
import React from "react";
import { components } from "react-select";
import makeAnimated from "react-select/animated";

export const Option = (props) => {
  const { isSelected, label } = props;
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={isSelected} onChange={() => null} />
        <label htmlFor={label}>{label}</label>
      </components.Option>
    </div>
  );
};

const allOption = {
  label: "Select all",
  value: "*",
};

export const ValueContainer = ({ children, ...props }) => {
  const { getValue } = props;
  const currentValues = getValue();
  let toBeRendered = children;
  if (currentValues.some((val) => val.value === allOption.value)) {
    toBeRendered = [[children[0][0]], children[1]];
  }

  return (
    <components.ValueContainer {...props}>
      {toBeRendered}
    </components.ValueContainer>
  );
};

export const MultiValue = (props) => {
  const { data } = props;
  let labelToBeDisplayed = data.label;
  if (data.value === allOption.value) {
    labelToBeDisplayed = "All is selected";
  }
  return (
    <components.MultiValue {...props}>
      <span>{labelToBeDisplayed}</span>
    </components.MultiValue>
  );
};

export const animatedComponents = makeAnimated();
