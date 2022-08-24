import React, { useState } from "react";
import styled, { css } from "styled-components";
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
  color: ${({ theme }) => theme.palette.common.white};
  height: 18px;
  border-radius: 16px;
  font-size: 12px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  ${({ color, theme }) =>
    `background-color: ${color ? color : theme.palette.primary.main};`}

  ${({ percentage }) => `width: ${percentage * 100}%;`}

  ${({ percentage }) =>
    percentage === 1 &&
    css`
      justify-content: space-between;
      padding-right: ${({ theme }) => theme.spacing(2)};
    `};
`;

const LeftNumber = styled.div`
  ${({ percentage }) => `width: ${100 - percentage * 100}%;`}
  display:flex;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const ProgressBar = ({ value, progressColor, total, ...props }) => {
  const [percentage, setPercentage] = useState(value / total);

  return (
    <Container {...props}>
      {value === total ? (
        <Indicator color={progressColor} value={value} percentage={percentage}>
          <div> {value}</div>
          <div> {total - value}</div>
        </Indicator>
      ) : (
        <>
          <Indicator
            color={progressColor}
            value={value}
            percentage={percentage}
          >
            {value}
          </Indicator>
          <LeftNumber percentage={percentage}>{total - value}</LeftNumber>
        </>
      )}
    </Container>
  );
};

ProgressBar.propTypes = ProgressBarPropTypes;

ProgressBar.defaultProps = ProgressBarDefaultProps;
