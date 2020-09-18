import React from "react";
import styled, { css } from "styled-components";

import { Icon, Text } from "..";
import { Row } from "./Row";

const StyledTd = styled.td`
  ${({ align, hiddenLabelSm, flexSm, theme }) => css`
    ${align && `text-align: ${align};`}
    ${theme.breakpoints.down("sm")} {
      display: ${({ hiddenSm }) => (hiddenSm ? "none" : "block")};
      padding: ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.palette.gray.semiLight};
      text-align: right;
      ${hiddenLabelSm && "text-align: left;"}

      ${!hiddenLabelSm &&
      css`
        ::before {
          content: attr(data-label);
          float: left;
          color: ${theme.palette.text.secondary};
          font-weight: normal;
          font-style: italic;
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

      :last-child {
        border-bottom: 0;
      }
    }
  `}
`;

const getContentByColType = (content, col) => {
  switch (col?.type) {
    case "text":
      return <Text color="textSecondary" content={content} fontWeight="bold" />;
    case "action":
      return content.map((act) => (
        <Icon icon={act.icon} color="secondary" mx={4} {...act} />
      ));
    case "icon":
      return (
        <Icon icon={content.icon} color="secondary" size="lg" {...content} />
      );
    default:
      return content;
  }
};

export const Rows = ({ columns, rows }) =>
  rows.map((row) => (
    <Row hasData={rows.length > 0}>
      {Object.keys(row).map((td) => {
        const col = columns.find((c) => c.key === td);
        const content = row[td];

        return (
          <StyledTd
            data-label={col?.label || ""}
            align={col?.tdAlign}
            flexSm={col?.flexSm}
            hiddenSm={col?.hiddenSm}
            hiddenLabelSm={col?.hiddenLabelSm}
          >
            {getContentByColType(content, col)}
          </StyledTd>
        );
      })}
    </Row>
  ));
