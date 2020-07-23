import React from "react";

import { HistoryItem, HistoryPropTypes } from ".";

export const History = ({ rows }) => {
  return rows.map((h) => <HistoryItem key={h.id} data={h} />);
};

History.propTypes = HistoryPropTypes;
