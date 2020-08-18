import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import {
  Box,
  FormRow,
  getFormInputError,
  Input,
  TextButton,
} from "../../../..";
import { loginBasicSchema } from "./schema";

export const LoginTemplateBasic = ({ switchLoginMethod }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(loginBasicSchema),
  });

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        headerTitle="Sign in to license.rocks"
        footerActionTitle="Sign in"
        footerRenderTitle={() => (
          <>
            <TextButton dBlock onClick={switchLoginMethod} px={0} size="sm">
              Login with Magic Link
            </TextButton>
            <TextButton color="secondary" px={0} size="sm">
              Forgot password?
            </TextButton>
          </>
        )}
        transition
      >
        <FormRow errors={errors} fields={["email"]} label="Email Address">
          <Input
            hasError={getFormInputError(errors, "email")}
            name="email"
            placeholder="Enter your email"
            register={register}
            startIcon="at"
          />
        </FormRow>

        <FormRow errors={errors} fields={["password"]} label="Password">
          <Input
            hasError={getFormInputError(errors, "password")}
            name="password"
            placeholder="Enter your password"
            register={register}
            startIcon="key"
          />
        </FormRow>
      </Box>
    </form>
  );
};

LoginTemplateBasic.propTypes = {
  switchLoginMethod: PropTypes.func.isRequired,
};

LoginTemplateBasic.defaultProps = {};
