import React from "react";

import { Text, TextButton } from "../../../..";

export const LoginTemplateCreateAccountText = (props) => {
  return (
    <Text color="textSecondary" size="sm" {...props}>
      No account yet?
      <TextButton content="Create Account" size="sm" />
    </Text>
  );
};

LoginTemplateCreateAccountText.propTypes = {};

LoginTemplateCreateAccountText.defaultProps = {};
