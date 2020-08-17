import React, { useState } from "react";

import { LoginTemplateOAuth } from "./OAuth";
import { LoginTemplateBasic } from "./Basic";
import { LoginTemplateCreateAccountText } from "./CreateAccountText";

export const LoginTemplate = () => {
  const [loginMethod, setLoginMethod] = useState("oAuth");
  return (
    <>
      {loginMethod === "oAuth" ? (
        <LoginTemplateOAuth switchLoginMethod={() => setLoginMethod("basic")} />
      ) : (
        <LoginTemplateBasic switchLoginMethod={() => setLoginMethod("oAuth")} />
      )}
      <LoginTemplateCreateAccountText align="center" mt={6} />
    </>
  );
};

LoginTemplate.propTypes = {};

LoginTemplate.defaultProps = {};
