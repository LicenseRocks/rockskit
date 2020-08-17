import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormRow,
  getFormInputError,
  Image,
  Input,
} from "../../../..";
import { loginOAuthSchema } from "./schema";
import MetaMask from "../../../../assets/images/metamask-logo.svg";
import WC from "../../../../assets/images/walletconnect-logo.svg";

export const LoginTemplateOAuth = ({ switchLoginMethod }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(loginOAuthSchema),
  });

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <Box headerTitle="Sign in to license.rocks" transition>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow errors={errors} fields={["email"]} label="Email Address">
          <Input
            hasError={getFormInputError(errors, "email")}
            name="email"
            placeholder="Enter your email"
            register={register}
            startIcon="at"
          />
        </FormRow>

        <Flex
          container
          alignItems="center"
          justify="space-between"
          mt={6}
          spacing={4}
        >
          <Flex item md={6} xs={12}>
            <Button
              block
              content="Login by password"
              color="subtle"
              onClick={switchLoginMethod}
            />
          </Flex>

          <Flex item md={6} xs={12}>
            <Button block content="Send a Magic Link" type="submit" />
          </Flex>
        </Flex>
      </form>

      <Divider my={6} text="or continue with" />

      <Flex container justify="space-between" mt={6} mb={4}>
        <Image width="50%" height="40px" src={MetaMask} onClick={() => {}} />

        <Image width="50%" height="40px" src={WC} onClick={() => {}} />
      </Flex>
    </Box>
  );
};

LoginTemplateOAuth.propTypes = {
  switchLoginMethod: PropTypes.func.isRequired,
};

LoginTemplateOAuth.defaultProps = {};
