import React, { useEffect, useState } from "react";
import { text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Icon } from ".";
import { AspectRatio } from "./AspectRatio";

export default {
  title: "Aspect Ratio",
  decorators: [StoryWrapper],
};

export const main = () => {
  const [ratio, setRatio] = useState(16 / 9);
  const inputRatio = text("Ratio", "16 / 9");

  useEffect(() => {
    const splitInputRatio = inputRatio.replace(/ /g, "").split("/").map(Number);
    setRatio(splitInputRatio[0] / splitInputRatio[1]);
  }, [inputRatio]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <AspectRatio ratio={ratio} maxWidth={text("Max width", "400px")}>
        <iframe
          src="https://www.youtube.com/embed/VjGSMUep6_4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
    </div>
  );
};
