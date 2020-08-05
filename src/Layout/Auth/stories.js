import React from "react";

// UI
import { Alert, AuthLayout, Language } from "../..";

export default {
  title: "Layout/Auth",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  return (
    <AuthLayout
      content={<Alert content="Welcome to Auth Layout!" />}
      headerRight={<Language onChange={() => {}} value="en" />}
    />
  );
};
