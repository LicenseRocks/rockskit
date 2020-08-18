import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import {
  Box,
  Divider,
  FormRow,
  getFormInputError,
  Input,
  ReactSelect,
  Text,
  TextButton,
} from "../../../..";
import { registerSchema } from "./schema";

export const RegisterForm = () => {
  const { control, errors, handleSubmit, register } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        headerTitle="Complete your information"
        footerActionTitle="Continue"
        footerRenderTitle={() => (
          <Text color="textSecondary" size="sm">
            By Clicking "Continue" you are agreeing to license.rocks's
            <TextButton content="Terms of Service" size="sm" />
          </Text>
        )}
        transition
      >
        <FormRow
          errors={errors}
          fields={["firstName", "lastName"]}
          label="Name"
        >
          <Input
            hasError={getFormInputError(errors, "firstName")}
            name="firstName"
            placeholder="First name"
            register={register}
            startIcon="user"
          />

          <Input
            hasError={getFormInputError(errors, "lastName")}
            name="lastName"
            placeholder="Last name"
            register={register}
          />
        </FormRow>

        <FormRow errors={errors} fields={["email"]} label="Email Address">
          <Input
            hasError={getFormInputError(errors, "email")}
            name="email"
            placeholder="Enter your email"
            register={register}
            startIcon="at"
          />
        </FormRow>

        <Divider my={2} />

        <FormRow errors={errors} fields={["company"]} label="Company">
          <Input
            hasError={getFormInputError(errors, "company")}
            name="company"
            placeholder="Company name"
            register={register}
            startIcon="building"
          />
        </FormRow>

        <Divider my={2} />

        <FormRow errors={errors} fields={["address"]} label="Address">
          <Input
            hasError={getFormInputError(errors, "address")}
            name="address"
            placeholder="Street + number"
            register={register}
            startIcon="map-marker"
          />
        </FormRow>

        <FormRow
          errors={errors}
          fields={["postCode", "city"]}
          label="PC + City"
        >
          <Input
            hasError={getFormInputError(errors, "postCode")}
            name="postCode"
            placeholder="Post Code"
            register={register}
            startIcon="user"
          />

          <Input
            hasError={getFormInputError(errors, "city")}
            name="city"
            placeholder="City"
            register={register}
          />
        </FormRow>

        <FormRow errors={errors} fields={["country"]} label="Country">
          <ReactSelect
            control={control}
            hasError={getFormInputError(errors, "country")}
            name="country"
            placeholder="Country"
          />
        </FormRow>
      </Box>
    </form>
  );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};
