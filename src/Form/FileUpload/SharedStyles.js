import React from 'react';
import styled, { css } from "styled-components";
import { Icon } from "../../Icon";

export const DropzoneItemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 6, 2, 4)};
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 12px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const RedIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.red.dark};
`

export const TrashIcon = ({ onClick }) => {
  return (
    <RedIcon
      icon="trash"
      prefix="far"
      onClick={onClick}
      title="Remove file"
    />
  )
};

export const PreviewWrapperStyles = css`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`;