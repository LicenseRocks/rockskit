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
`;

export const Table = ({ columns, rows, noDataProps, ...props }) => (
  <StyledTable {...props}>
    <Heading columns={columns} hasData={rows.length > 0} />

    <tbody>
      {rows.length > 0 ? (
        <Rows columns={columns} rows={rows} />
      ) : (
        <NoData columnsCount={columns.length} {...noDataProps} />
      )}
    </tbody>
  </StyledTable>
);

Table.propTypes = TablePropTypes;

Table.defaultProps = TableDefaultProps;
