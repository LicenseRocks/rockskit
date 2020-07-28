import React from "react";

import { AppContainer } from "../../src";
import { theme } from "../../src/theme";
import "../../src/theme/faLibrary";

export const Container = (story) => {
  return <AppContainer theme={theme}>{story()}</AppContainer>;
};
