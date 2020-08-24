import React from "react";

// UI
import { Alert, DashboardLayout, Language } from "../..";

export default {
  title: "Layout/Dashboard",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  return (
    <DashboardLayout
      content={<Alert content="Welcome to Dashboard Layout!" />}
      headerRight={<Language onChange={() => {}} value="en" />}
    />
  );
};
