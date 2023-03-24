import React from "react";
import styled from "styled-components";
import { TextButton } from "../TextButton";
import { Icon } from "../../Icon";

const DeleteLine = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;

    button {
      opacity: 0.7;
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.palette.error.main};
  margin-right: ${({ theme }) => theme.spacing(2)};

  svg {
    width: 14px !important;
    height: 14px !important;
    color: ${({ theme }) => theme.palette.error.main};
  }
`;

const StyledDeleteButton = styled(TextButton)`
  color: ${({ theme }) => theme.palette.error.main} !important;
  padding: 0 !important;
  font-size: inherit !important;
`;

export const DeleteButton = ({ handleClick, content }) => {
  return (
    <DeleteLine onClick={handleClick}>
      <IconWrapper>
        <Icon
          color="error"
          icon="trash"
          prefix="far"
          size="sm"
        />
      </IconWrapper>
      <StyledDeleteButton pl={0} content={content} size="md" fontWeight="normal" />
    </DeleteLine>
  )
};
