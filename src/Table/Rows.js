import React from "react";
import styled, { css } from "styled-components";

import { Icon, Text } from "..";
import { Row } from "./Row";

const StyledTd = styled.td`
  ${({
    align,
    displaySm,
    hiddenLabelSm,
    flexSm,
    rowsBottomBorderSm,
    theme,
  }) => css`
    &:first-child {
      padding-left: ${theme.spacing(4)}
    }
    
    &:last-child {
      padding-right: ${theme.spacing(4)}
    }
    
    ${align && `text-align: ${align};`}
    ${theme.breakpoints.down("sm")} {

      display: ${({ hiddenSm }) => (hiddenSm ? "none" : "block")};
      margin-bottom: ${theme.spacing(4)};

      ${rowsBottomBorderSm &&
      css`
        border-bottom: 1px solid ${theme.palette.gray.semiLight};
      `}

      ${displaySm === "inline" && "text-align: right;"}
      ${hiddenLabelSm && "text-align: left;"}

      ${!hiddenLabelSm &&
      css`
        ::before {
          content: attr(data-label);
          ${displaySm === "inline" && "float: left;"}
          color: ${theme.palette.text.secondary};
          padding-bottom: ${theme.spacing(2)};
          display: block;
          font-weight: normal;
          font-size: 12px;
          line-height: 120%;
        }
      `}

      ${flexSm &&
      css`
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}

      &:first-child {
        padding-left: 0;
      }
      
      :last-child {
        border-bottom: 0;
        margin-bottom: 0;
        padding-right: 0;
      }
    }
  `}
`;

const getContentByColType = (content, col) => {
  switch (col?.type) {
    case "text":
      return <Text color="textPrimary" content={content} fontWeight="bold" fontSize="lg" />;
    case "action":
      return content.map((act) => (
        <Icon icon={act.icon} color="black" mx={4} {...act} />
      ));
    case "icon":
      return (
        <Icon icon={content.icon} color="black" size="lg" {...content} />
      );
    default:
      return content;
  }
};

export const Rows = ({ columns, rows, rowsBottomBorderSm, rowsSize }) =>
  rows.map((row) => (
    <Row hasData={rows.length > 0} size={rowsSize}>
      {Object.keys(row).map((td) => {
        const col = columns.find((c) => c.key === td);
        const content = row[td];

        return (
          <StyledTd
            data-label={col?.label || ""}
            align={col?.tdAlign}
            displaySm={col?.displaySm || "block"}
            flexSm={col?.flexSm}
            hiddenSm={col?.hiddenSm}
            hiddenLabelSm={col?.hiddenLabelSm}
            rowsBottomBorderSm={rowsBottomBorderSm}
            style={col?.style || {}}
          >
            {getContentByColType(content, col)}
          </StyledTd>
        );
      })}
    </Row>
  ));
