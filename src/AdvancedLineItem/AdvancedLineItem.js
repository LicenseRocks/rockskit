/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { TextButton } from "..";
import { Flex } from "../Flex";
import { ItemActionButton } from "./ItemActionButton";
import { ItemContent } from "./ItemContent";

const StyledLineItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ showItemAction }) => (showItemAction ? 130 : 110)}px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
  box-sizing: border-box;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: transparent;
  overflow: hidden;
`;

const Content = styled(Flex).attrs(() => ({
  container: true,
  justify: "space-between",
  spacing: 2,
}))`
  padding: ${({ theme }) => theme.spacing(4)};
  ${({ hoverable }) =>
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        transition: all 0.1s ease-in-out;
        background-color: ${({ theme }) => theme.palette.gray.semiLight};
      }
    `}
`;

const ActionButtons = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  padding: ${({ theme }) => theme.spacing(4)};
  justify-content: ${({ justifyEnd }) =>
    justifyEnd ? "flex-end" : "space-between"};
  align-items: center;
`;

export const AdvancedLineItem = ({
  actionButtons,
  contentItems,
  dataCy,
  extraContent,
  itemId,
  hoverable,
  secondaryActionButton,
  Wrapper,
}) => {
  const content = (
    <Content hoverable={hoverable}>
      {contentItems.map((item, idx) => (
        <ItemContent key={`item-${itemId}-${idx}`} item={item} />
      ))}
    </Content>
  );

  return (
    <StyledLineItem data-cy={dataCy} showItemAction={actionButtons.length > 0}>
      {Wrapper ? <Wrapper>{content}</Wrapper> : content}

      <ActionButtons
        show={actionButtons.length || secondaryActionButton}
        justifyEnd={!actionButtons.length}
      >
        <div>
          {actionButtons
            .filter(({ show = [true] }) => show.some((b) => b))
            .map((button, idx) => (
              <ItemActionButton key={`item-${itemId}-${idx}`} button={button} />
            ))}
        </div>

        {secondaryActionButton && (
          <TextButton
            content={secondaryActionButton.content}
            size="sm"
            {...secondaryActionButton}
          />
        )}
      </ActionButtons>

      {extraContent}
    </StyledLineItem>
  );
};

AdvancedLineItem.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.shape({})),
  contentItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataCy: PropTypes.string,
  extraContent: PropTypes.node,
  itemId: PropTypes.number.isRequired,
  hoverable: PropTypes.bool,
  secondaryActionButton: PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.node,
  }),
};

AdvancedLineItem.defaultProps = {
  actionButtons: [],
  dataCy: "lineItem",
  extraContent: null,
  link: null,
  secondaryActionButton: null,
};
