import React from "react";

import { AuthLayout, Language } from "../../..";
import { RegisterTemplate } from ".";

export default {
  title: "Template/Auth/Register",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  return (
    <AuthLayout
      content={<RegisterTemplate />}
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
