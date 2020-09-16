import React from "react";
import PropTypes from "prop-types";

import { NoItem } from "..";

export const NoData = ({ columnsCount, ...props }) => (
  <tr>
    <td colSpan={columnsCount}>
      <NoItem my={4} {...props} />
    </td>
  </tr>
);

NoData.propTypes = {
  columnsCount: PropTypes.number.isRequired,
};
