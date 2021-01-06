import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MuiPopover from "@material-ui/core/Popover";
import DayPicker, { DateUtils } from "react-day-picker";

import { Button, formatDateAndTime, Input, TextButton } from "../..";

const Popover = styled(MuiPopover)`
  .MuiPopover-paper {
    background-color: ${({ theme }) => theme.palette.common.white};
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding: 0;
    border-radius: 12px;
    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);
  }
`;

const Container = styled.div`
  display: flex;

  .Selectable
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.palette.primary.light} !important;
    color: ${({ theme }) => theme.palette.text.primary};
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: ${({ theme }) => theme.palette.common.white};
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
  }
  .Selectable .DayPicker-Day--end {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: ${({ theme }) => theme.palette.common.white};
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
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
`;

export const DatepickerComponent = ({
  cancelText,
  disabled,
  datepickerProps,
  hasError,
  onChange,
  placeholder,
  submitText,
  value,
}) => {
  const [anchorEl, setAnchorEl] = useState();
  const [date, setDate] = useState({
    from: "",
    to: "",
  });
  const { from, to } = date;
  const fromFormatted = value.start
    ? formatDateAndTime(value.start, {
        showTime: false,
      })
    : "-";
  const toFormatted = value.end
    ? formatDateAndTime(value.end, {
        showTime: false,
      })
    : "-";

  useEffect(() => {
    setDate({
      from: value.start,
      to: value.end,
    });
  }, [anchorEl]);

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, date);
    setDate(range);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    onChange({
      start: from,
      end: to,
    });
    handleClosePopover();
  };

  return (
    <>
      <Input
        disabled={disabled}
        hasError={hasError}
        placeholder={placeholder}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        readOnly
        selectable
        value={
          value.start && value.end ? `${fromFormatted} - ${toFormatted}` : ""
        }
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
        <Container>
          <DayPicker
            className="Selectable"
            selectedDays={[from, { from, to }]}
            modifiers={{ start: from, end: to }}
            onDayClick={handleDayClick}
            {...datepickerProps}
          />
        </Container>

        <BottomSection>
          <TextButton
            content={cancelText}
            onClick={handleClosePopover}
            size="sm"
          />

          <Button
            content={submitText}
            disabled={!from || !to}
            onClick={handleSubmit}
            size="sm"
          />
        </BottomSection>
      </Popover>
    </>
  );
};

DatepickerComponent.propTypes = {
  cancelText: PropTypes.string,
  disabled: PropTypes.bool,
  datepickerProps: PropTypes.shape({}),
  hasError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  submitText: PropTypes.string,
  value: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

DatepickerComponent.defaultProps = {
  cancelText: "Cancel",
  disabled: false,
  datepickerProps: {},
  hasError: false,
  placeholder: "Select dates",
  submitText: "Submit",
  value: {},
};
