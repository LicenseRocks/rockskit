import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../../Icon";
import { Image } from "../../Image";
import { H6, Text } from "../../Typography";

const CardItem = styled.div`
  width: 168px;
  min-height: 200px !important;
  border-radius: 12px;
  box-shadow: rgba(41, 40, 57, 0.08) 0px 8px 32px;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const CardTitle = styled(H6)`
  flex: 1;
  height: 60px;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const CardStyledImage = styled(Image)`
  width: 148px;
  height: 130px;
  object-fit: cover;
  z-index: 2;
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;

  mask-image: radial-gradient(
      circle at left center,
      transparent 20px,
      black 21px,
      black 55%,
      transparent 0
    ),
    radial-gradient(
      circle at right center,
      transparent 20px,
      black 21px,
      black 55%,
      transparent 0
    ),
    linear-gradient(
      to top,
      transparent 0px,
      black 0px,
      black 25%,
      transparent 0
    ),
    linear-gradient(
      to bottom,
      transparent 0px,
      black 0px,
      black 25%,
      transparent 0
    );
`;
const CardHeaderRow = styled.div`
  display: flex;
`;

const CardClose = styled(Icon)`
  width: 14px !important;
  height: 14px !important;
  margin-right: 10px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
`;

const CardSelectCircle = styled.div`
  width: 24px !important;
  height: 24px !important;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.gray.regular};
  margin-right: 10px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: grid;
  place-items: center;

  svg {
    color: ${({ theme }) => theme.palette.common.white} !important;
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: ${({ theme }) => theme.palette.primary.main};
    `}
`;

export const SelectItemCard = ({
  id,
  coverSrc,
  title,
  checked,
  onClick,
  isRemovable,
  onRemove,
}) => {
  return (
    <CardItem onClick={onClick}>
      <CardHeaderRow>
        <CardTitle content={title} />
        <CardSelectCircle checked={checked}>
          {checked && <Icon icon="check" />}
        </CardSelectCircle>
        {isRemovable && (
          <CardClose
            onClick={() => onRemove(id)}
            color="secondary"
            icon="times"
          />
        )}
      </CardHeaderRow>
      {coverSrc && <CardStyledImage src={coverSrc} />}
    </CardItem>
  );
};
