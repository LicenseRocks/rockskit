import React from "react";

import { Button, TextButton } from "../..";
import { FormButtonHandlers } from "./ButtonHandlers";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/ButtonHandlers",
  component: FormButtonHandlers,
  decorators: [StoryWrapper],
};

export const main = () => {
  return (
    <FormButtonHandlers>
      <TextButton
        content={"Cancel"}
        size="lg"
      />
      <Button
        content="Save Changes"
        size="lg"
        type="submit"
        mr={6}
        ml={3}
      />
    </FormButtonHandlers>
  );
};
