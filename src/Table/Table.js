import React from "react";
import styled from "styled-components";

import { TablePropTypes, TableDefaultProps } from "./props";
import { Rows } from "./Rows";
import { Heading } from "./Heading";
import { NoData } from "./NoData";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: block;
  }
`;

const StyledTbody = styled.tbody`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: block;
  }
`;

export const Table = ({
  columns,
  rows,
  noDataProps,
  rowsBottomBorderSm,
  rowsSize,
  ...props
}) => (
  <StyledTable {...props}>
    <Heading columns={columns} hasData={rows.length > 0} />

    <StyledTbody>
      {rows.length > 0 ? (
        <Rows
          columns={columns}
          rows={rows}
          rowsBottomBorderSm={rowsBottomBorderSm}
          rowsSize={rowsSize}
        />
      ) : (
        <NoData columnsCount={columns.length} {...noDataProps} />
      )}
    </StyledTbody>
  </StyledTable>
);

Table.propTypes = TablePropTypes;

Table.defaultProps = TableDefaultProps;
