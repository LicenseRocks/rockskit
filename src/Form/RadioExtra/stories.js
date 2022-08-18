import React from "react";
import styled from "styled-components";
import { boolean, text } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";
import { StoryWrapper } from "../../../.storybook/decorators";
import { RadioExtra } from "./RadioExtra";

export default {
  title: "Form/RadioExtra",
  component: RadioExtra,
  decorators: [StoryWrapper],
};

const Grid = styled.div`
  fieldset {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
    border: none;
    padding: 0;
    margin: 0;
    max-width: 480px;

    ${({ theme }) => theme.breakpoints.down("md")} {
      grid-template-columns: 1fr;
    }
  }
`;

const RadioExtraGrid = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    name: "radio",
    options: [
      {
        value: text("Value", "passport"),
        title: text("Title", "Passport"),
        description: text("Description", "More info if necessary, like a valid passport period"),
        icon: text("Icon", "id-card"),
        iconPrefix: text("Icon prefix", "far")
      },
      {
        value: "nationalId",
        title: "National ID card",
        description: "More info if necessary, like a valid ID period",
        icon: "passport",
      },
    ],
    hasError: boolean("hasError", false),
    register,
  };

  const values = watch();
  console.log("values: ", values);

  return (
    <RadioExtraGrid>
      <RadioExtra {...defaultProps} />
    </RadioExtraGrid>
  );
};
