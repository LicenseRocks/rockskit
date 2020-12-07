import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import { StoryWrapper } from "../../.storybook/decorators";
import { Button, Snackbar } from "..";

export default {
  title: "Snackbar",
  component: Snackbar,
  decorators: [StoryWrapper],
};

const BaseComponent = () => {
  const { enqueueSnackbar } = useSnackbar();

  // The trick is to put the "message" inside the options object
  const handleShowSnackbar = () => {
    enqueueSnackbar({
      message: "Snackbar Message",
      persist: true,
    });
  };

  return <Button content="Show Snackbar" onClick={handleShowSnackbar} />;
};

export const main = () => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    content={(key, options) => <Snackbar id={key} {...options} />}
    maxSnack={3}
  >
    <BaseComponent />
  </SnackbarProvider>
);
