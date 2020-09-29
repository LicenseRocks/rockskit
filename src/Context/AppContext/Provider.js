import React from "react";
import PropTypes from "prop-types";

import { AppContext } from "./Context";

export const AppContextProvider = ({ config, ...props }) => {
  return <AppContext.Provider value={config} {...props} />;
};

AppContextProvider.propTypes = {
  config: PropTypes.shape({}),
};

AppContextProvider.defaultProps = {
  config: {},
};
