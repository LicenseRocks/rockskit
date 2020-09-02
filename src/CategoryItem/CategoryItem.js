import React from "react";
import styled, { css } from "styled-components";

import { Icon, Text } from "..";
import { CategoryItemPropTypes, CategoryItemDefaultProps } from "./props";

const StyledCategoryItem = styled.div`
  position: relative;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.gray.semiLight};
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ checked }) =>
    checked &&
    css`
      border-color: ${({ theme }) => theme.palette.primary.main};
    `}
`;

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-bottom-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  svg {
    color: #ffffff;
  }
`;

export const CategoryItem = ({
  checked,
  dataCy,
  description,
  iconName,
  iconImage,
  id,
  onChange,
  subCategory,
  name,
  ...props
}) => {
  return (
    <StyledCategoryItem
      checked={checked}
      data-cy={dataCy}
      onClick={() => onChange(id)}
      {...props}
    >
      {checked && (
        <CheckIcon>
          <Icon icon="check" size="sm" />
        </CheckIcon>
      )}
      {iconName && <Icon colorGrayMedium icon={iconName} size="lg" />}
      {iconImage && <StyledIcon src={iconImage} alt={name} />}
      <Text
        color={subCategory ? "textPrimary" : "primary"}
        fontWeight="bold"
        noWrap
        py={2}
      >
        {name}
      </Text>
      <Text color="textSecondary" fontSize="sm">
        {description}
      </Text>
    </StyledCategoryItem>
  );
};

CategoryItem.propTypes = CategoryItemPropTypes;

CategoryItem.defaultProps = CategoryItemDefaultProps;
