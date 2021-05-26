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
  // loadingIndicator: "https://lh3.googleusercontent.com/BEu_ss5ietr9ahFpz9IQGDwQyo_XA19YoLrqf1-wUxwtb6i684DmsiJgOTpMHgQeaij3wvVO-lsHV3WnRaFi=w2880-h1388",
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
