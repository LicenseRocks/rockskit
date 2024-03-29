import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";

import { DatepickerDefaultProps, DatepickerPropTypes } from "./props";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.common.white} !important;

  .Selectable
  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.palette.primary.light} !important;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .Selectable .DayPicker-Day {
    border-radius: ${({ selectRange }) => (selectRange ? 0 : "8px")} !important;
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

export const Datepicker = ({ from, selectRange, to, startFromToday, ...props }) => {
  const today = new Date();
  return (
    <Container selectRange={selectRange}>
      <DayPicker
        className="Selectable"
        disabledDays={startFromToday ? { before: today } : null}
        initialMonth={from}
        selectedDays={[from, ...(selectRange ? [{ from, to }] : [])]}
        modifiers={{ start: from, end: to }}
        {...props}
      />
    </Container>
  );
};

Datepicker.propTypes = DatepickerPropTypes;

Datepicker.defaultProps = DatepickerDefaultProps;
