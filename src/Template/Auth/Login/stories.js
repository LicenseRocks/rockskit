import React from "react";

// UI
import { AuthLayout, Language } from "../../..";
import { LoginTemplate } from ".";

export default {
  title: "Template/Auth/Login",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  return (
    <AuthLayout
      content={<LoginTemplate />}
      headerBackButtonOnClick={() => console.log("Go back")}
      headerRight={
        <Language
          onChange={(value) => console.log(`Change it to ${value}`)}
          value="en"
        />
      }
    />
  );
};
