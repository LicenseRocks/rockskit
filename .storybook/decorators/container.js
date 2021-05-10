import React from "react";

import { AppContainer, RocksKitIcons, RocksKitTheme } from "../../src";

const theme = RocksKitTheme({
  // colors: {
  //   primaryMain: "blue"
  // },
  // fonts: {
  //   heading: "Arial Black",
  //   regular: "Arial"
  // }
});

export const Container = (story) => {
  return (
    <AppContainer
      appConfig={{
        appTitle: "Test app",
      }}
      icons={RocksKitIcons}
      theme={theme}
    >
      {story()}
    </AppContainer>
  );
};
