import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Text } from "..";
import { Row } from "./Row";

const StyledThead = styled.thead`
  ${({ hasData, theme }) =>
    hasData &&
    css`
      tr th {
        &:first-child {
          padding-left: ${theme.spacing(6)};
        }
        
        &:last-child {
          padding-right: ${theme.spacing(6)};
        }
      }
      
      border-bottom: 2px solid ${({ theme }) => theme.palette.gray.regular};
      ${theme.breakpoints.down("sm")} {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
    `}
`;

export const Heading = ({ columns, hasData }) =>
  columns.length > 0 && (
    <StyledThead hasData={hasData}>
      <Row size="sm" hasData={hasData}>
        {columns.map(({ label = "", render = () => {} }) => (
          <th>
            {render() ||
              (label && (
                <Text
                  align="left"
                  color="textPrimary"
                  content={label}
                  fontWeight="normal"
                />
              ))}
          </th>
        ))}
      </Row>
    </StyledThead>
  );

Heading.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  hasData: PropTypes.bool.isRequired,
};
