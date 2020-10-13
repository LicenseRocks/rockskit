import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import flatMap from "lodash/flatMap";

import {
  animatedComponents,
  MultiValue,
  Option,
  ValueContainer,
} from "./Components";

export const CustomSelect = (props) => {
  const {
    allOption,
    allowSelectAll,
    isGrouped,
    onChange,
    options: rawOpts,
  } = props;

  // Handle grouped options
  let options = [];
  if (isGrouped) options = flatMap(rawOpts, (opt) => opt.options);
  else options = rawOpts;

  if (allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        components={{
          Option,
          MultiValue,
          ValueContainer,
          animatedComponents,
        }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isMulti
        options={[allOption, ...rawOpts]}
        onChange={(selected, event) => {
          if (selected !== null && selected.length > 0) {
            if (selected[selected.length - 1].value === allOption.value) {
              return onChange([allOption, ...options]);
            }
            let result = [];
            if (selected.length === options.length) {
              if (selected.includes(allOption)) {
                result = selected.filter(
                  (option) => option.value !== allOption.value
                );
              } else if (event.action === "select-option") {
                result = [allOption, ...options];
              }
              return onChange(result);
            }
          }

          return onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

CustomSelect.propTypes = {
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  isGrouped: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

CustomSelect.defaultProps = {
  allowSelectAll: false,
  allOption: {
    label: "Select all",
    value: "*",
  },
  isGrouped: false,
};
