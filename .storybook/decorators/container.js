import React from "react";

import {
  AppContainer,
  FreeBrandIconSet,
  FreeSolidIconSet,
  RocksTheme,
} from "../../src";

export const Container = (story) => {
  return (
    <AppContainer
      icons={{ ...FreeSolidIconSet, ...FreeBrandIconSet }}
      theme={RocksTheme}
    >
      {story()}
    </AppContainer>
  );
};
