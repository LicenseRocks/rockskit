import React from "react";
import styled, { css } from "styled-components";
import { H6, Text } from "../../Typography";
import { Icon } from "../../Icon";
import { Image } from "../../Image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ maxWidth, items }) =>
    maxWidth &&
    items === 0 &&
    css`
      max-width: ${maxWidth}px !important;
    `}
`;

const SelectItem = styled.div`
  position: relative;
  width: 169px;
  min-height: 200px !important;
  border-radius: 12px;
  border: 3px solid ${({ theme }) => theme.palette.gray.regular};
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing(2)};

  display: grid !important;
  place-items: center;
`;

const AddIcon = styled(Icon)`
  font-size: 28px !important;
  color: ${({ theme }) => theme.palette.gray.medium} !important;
`;

const Description = styled(Text)`
  position: absolute;
  bottom: 40px;
  color: ${({ theme }) => theme.palette.gray.medium};
`;

const Item = styled.div`
  width: 168px;
  min-height: 200px !important;
  border-radius: 12px;
  box-shadow: rgba(41, 40, 57, 0.08) 0px 8px 32px;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const HeaderRow = styled.div`
  display: flex;
`;

const Close = styled(Icon)`
  width: 14px !important;
  height: 14px !important;
  margin-right: 10px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 148px;
  height: 130px;
  object-fit: cover;
  z-index: 2;
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Title = styled(H6)`
  flex: 1;
  height: 60px;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const SelectNftCard = ({ onClick }) => {
  return (
    <SelectItem onClick={onClick}>
      <AddIcon icon="plus" />
      <Description content={"select"} />
    </SelectItem>
  );
};

const Card = ({ id, coverSrc, title, onClick, isRemovable, onRemove }) => {
  return (
    <Item onClick={onClick}>
      <HeaderRow>
        <Title content={title} />

        {isRemovable && (
          <Close onClick={() => onRemove(id)} color="secondary" icon="times" />
        )}
      </HeaderRow>
      {coverSrc && <StyledImage src={coverSrc} />}
    </Item>
  );
};

export const ItemsPreview = ({ items, onRemove, action, maxWidth }) => {
  return (
    <>
      <Container maxWidth={maxWidth} items={items?.length}>
        {items?.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              coverSrc={item.coverSrc}
              isRemovable
              onRemove={onRemove}
            />
          );
        })}

        <SelectNftCard onClick={action} />
      </Container>
    </>
  );
};
