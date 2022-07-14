/**
 * React Select
 */

import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, ReactSelect } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

const OPTIONS = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const OPTIONS2 = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
];

const groupedOptions = [
  {
    label: "Colours",
    options: OPTIONS,
  },
  {
    label: "Flavours",
    options: OPTIONS2,
  },
];

export default {
  title: "Form/ReactSelect",
  component: ReactSelect,
  decorators: [StoryWrapper],
};

export const main = (props = {}) => {
  const { control, errors, watch } = useForm();

  const defaultProps = {
    control,
    errors,
    hasError: boolean("Has error", false),
    isMulti: boolean("isMulti", false),
    isClearable: true,
    name: "reactSelect",
    options: OPTIONS,
    ...props,
  };

  const values = watch();
  console.log("values: ", values);

  return <ReactSelect {...defaultProps} />;
};

export const async = (props = {}) => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const defaultProps = {
    async,
    control,
    defaultOptions: true,
    endpoint: "https://run.mocky.io/v3/a7e06c66-251c-4ca9-a8ac-cac5284d21a0",
    hasError: !!errors.Async,
    isRequired: "This item is required",
    isClearable: true,
    name: "reactSelect",
    ...props,
  };

  console.log("errors: ", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactSelect {...defaultProps} />

      {errors.Async && <FormError message={errors.Async.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};

export const withSelectAll = (props = {}) => {
  const { control, errors, watch } = useForm();

  const defaultProps = {
    allowSelectAll: true,
    control,
    errors,
    hasError: boolean("Has error", false),
    isClearable: true,
    isGrouped: true,
    name: "reactSelect",
    options: groupedOptions,
    ...props,
  };

  const values = watch();
  console.log("values: ", values);

  return <ReactSelect {...defaultProps} />;
};