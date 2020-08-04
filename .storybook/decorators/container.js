import React from "react";

import { AppContainer, RocksKitIcons, RocksKitTheme } from "../../src";

export const Container = (story) => {
  return (
    <AppContainer icons={RocksKitIcons} theme={RocksKitTheme}>
      {story()}
    </AppContainer>
  );
};
