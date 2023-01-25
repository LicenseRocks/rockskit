import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { OutlineButton } from "../../Button";
import { SingleCheckbox } from "./SingleCheckbox";

export default {
  title: "Form/SingleCheckbox",
  component: SingleCheckbox,
  decorators: [StoryWrapper],
};

export const main = (props = {}) => {
  const methods = useForm({
    defaultValues: { checkbox: true },
  });

  const { watch, handleSubmit, control } = methods;

  const defaultProps = {
    ...props,
  };

  const formValues = watch();

  const onSubmit = async (formValuesSubmit) => {
    console.log({ formValuesSubmit });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SingleCheckbox
            id="single-checkbox-test"
            control={control}
            name="checkbox"
          />
          <label htmlFor="single-checkbox-test">Checkbox</label>
        </div>
        <OutlineButton type="submit">Submit</OutlineButton>
      </form>
    </FormProvider>
  );
};
