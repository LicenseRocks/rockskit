import React from "react";

import { AppContainer, RocksKitIcons, RocksKitTheme } from "../../src";

export const Container = (story) => {
  return (
    <AppContainer
      appConfig={{
        appTitle: "Test app",
      }}
      icons={RocksKitIcons}
      theme={RocksKitTheme}
    >
      {story()}
    </AppContainer>
  );
};
