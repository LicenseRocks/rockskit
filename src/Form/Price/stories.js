import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { PriceField } from "./Price";

export default {
  title: "Form/PriceField",
  component: PriceField,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    defaultValue: 5,
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "price",
    inputProps: {
      placeholder: "Price",
    },
    selectProps: {
      name: "currency",
    },
    register,
    startIcon: "money-bill",
    currenciesFromDB: [
      { sign: "€", label: "EUR (€)", value: "eur" },
      { sign: "zł", label: "PLN (zł)", value: "pln" },
      { sign: "$", label: "USD ($)", value: "usd" },
      { sign: "£", label: "GBP (£)", value: "gbp" },
    ],
  };

  const values = watch();
  console.log("values: ", values);

  return <PriceField {...defaultProps} />;
};
