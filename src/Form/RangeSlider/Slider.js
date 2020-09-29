import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MuiSlider from "@material-ui/core/Slider";

import { DISPLAY, SPACER, Text } from "../..";

const StyledSlider = styled(MuiSlider)`
  .MuiSlider-rail {
    background: ${({ hasError, theme }) =>
      hasError ? theme.palette.error.main : theme.palette.gray.regular};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledThumb = styled.span`
  &.MuiSlider-thumb {
    background: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: ${({ theme }) => theme.spacing(2)};
    width: auto;
    min-width: 28px;
    height: 28px;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.16),
      0px 3px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    margin-top: -13px;
  }
`;

export const Slider = ({
  onChange,
  renderValue,
  renderValueText,
  value,
  ...props
}) => {
  const Thumb = (thumbProps) => {
    const currentVal = thumbProps["aria-valuenow"] || "0";
    return (
      <StyledThumb {...thumbProps}>
        {renderValue(currentVal) || (
          <Text
            content={renderValueText(currentVal) || String(currentVal)}
            fontSize="sm"
            fontWeight="bold"
          />
        )}
      </StyledThumb>
    );
  };

  return (
    <StyledSlider
      onChangeCommitted={(_, val) => onChange(val)}
      ThumbComponent={Thumb}
      value={value || 0}
      {...props}
    />
  );
};

Slider.propTypes = {
  renderValue: PropTypes.func,
  renderValueText: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
};

Slider.defaultProps = {
  renderValue: () => {},
  renderValueText: () => {},
};
