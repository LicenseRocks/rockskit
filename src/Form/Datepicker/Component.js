import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MuiPopover from "@material-ui/core/Popover";
import { DateUtils } from "react-day-picker";

import { Button, formatDateAndTime, Input, TextButton } from "../..";
import { Datepicker } from "../../Datepicker";

const Popover = styled(MuiPopover)`
  .MuiPopover-paper {
    background-color: ${({ theme }) => theme.palette.common.white} !important;
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding: 0;
    border-radius: 12px;
    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);
  }
`;

const BottomSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  border-top: 1px solid ${({ theme }) => theme.palette.gray.light};
  background-color: ${({ theme }) => theme.palette.common.white} !important;
`;

export const FormDatepickerComponent = ({
  cancelText,
  disabled,
  datepickerProps,
  hasError,
  onChange,
  placeholder,
  selectRange,
  submitText,
  value,
  startFromToday
}) => {
  const currentValue = {
    start: value?.start || value,
    end: value?.end || null,
  };

  const [anchorEl, setAnchorEl] = useState();
  const [date, setDate] = useState({
    from: null,
    to: null,
  });
  const { from, to } = date;

  const fromFormatted = currentValue.start
    ? formatDateAndTime(currentValue.start, {
        showTime: false,
      })
    : "-";
  const toFormatted = currentValue.end
    ? formatDateAndTime(currentValue.end, {
        showTime: false,
      })
    : "-";

  useEffect(() => {
    setDate({
      from: currentValue.start,
      to: currentValue.end,
    });
  }, [anchorEl]);

  const handleDayClick = (day, { selected }) => {
    if (selectRange) {
      const range = DateUtils.addDayToRange(day, date);
      setDate(range);
    } else {
      setDate({
        from: selected ? null : day,
        to: null,
      });
    }
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    if (selectRange) {
      onChange({
        start: from,
        end: to,
      });
    } else {
      onChange(from);
    }
    handleClosePopover();
  };

  let inputVal;
  if (!selectRange && currentValue.start) inputVal = fromFormatted;
  else if (selectRange && currentValue.start && currentValue.end)
    inputVal = `${fromFormatted} - ${toFormatted}`;

  return (
    <>
      <Input
        disabled={disabled}
        hasError={hasError}
        placeholder={placeholder}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        readOnly
        selectable
        value={inputVal}
      />

      <Popover
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Datepicker
          from={from}
          to={to}
          onDayClick={handleDayClick}
          selectRange={selectRange}
          startFromToday={startFromToday}
          {...datepickerProps}
        />
        <BottomSection>
          <TextButton
            content={cancelText}
            onClick={handleClosePopover}
            size="sm"
          />

          <Button
            content={submitText}
            disabled={(selectRange && (!from || !to)) || !from}
            onClick={handleSubmit}
            size="sm"
          />
        </BottomSection>
      </Popover>
    </>
  );
};

FormDatepickerComponent.propTypes = {
  cancelText: PropTypes.string,
  disabled: PropTypes.bool,
  datepickerProps: PropTypes.shape({}),
  hasError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectRange: PropTypes.bool,
  submitText: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

FormDatepickerComponent.defaultProps = {
  cancelText: "Cancel",
  disabled: false,
  datepickerProps: {},
  hasError: false,
  placeholder: "Select dates",
  selectRange: false,
  submitText: "Submit",
  value: null,
};
