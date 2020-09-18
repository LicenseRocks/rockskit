import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { NoItem } from "..";

const StyledTr = styled.tr`
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const NoData = ({ columnsCount, ...props }) => (
  <StyledTr>
    <td colSpan={columnsCount}>
      <NoItem my={4} {...props} />
    </td>
  </StyledTr>
);

NoData.propTypes = {
  columnsCount: PropTypes.number.isRequired,
};
