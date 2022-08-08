import React, { useState } from "react";
import styled from "styled-components";
import { DISPLAY, SPACER } from "..";
import { ProgressBarDefaultProps, ProgressBarPropTypes } from "./props";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.gray.regular};
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 16px;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Indicator = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 18px;
  border-radius: 16px;
  font-size: 12px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.white};
  ${({ percentage }) => `width: ${percentage * 100}%;`}
`;

const LeftNumber = styled.div`
  ${({ percentage }) => `width: ${100 - percentage * 100}%;`}
  display:flex;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const ProgressBar = ({ value, total, ...props }) => {
  const [percentage, setPercentage] = useState(value / total);

  return (
    <Container {...props}>
      <Indicator value={value} percentage={percentage}>
        {value}
      </Indicator>
      <LeftNumber percentage={percentage}>{total - value}</LeftNumber>
    </Container>
  );
};

ProgressBar.propTypes = ProgressBarPropTypes;

ProgressBar.defaultProps = ProgressBarDefaultProps;
