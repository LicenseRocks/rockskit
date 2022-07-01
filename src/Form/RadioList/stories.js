import React from "react";
import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";
import { StoryWrapper } from "../../../.storybook/decorators";
import { RadioList } from "./RadioList";

export default {
  title: "Form/RadioList",
  component: RadioList,
  decorators: [StoryWrapper],
};

const StyledUl = styled.div`
  fieldset {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;

    ${({ theme }) => theme.breakpoints.down("md")} {
      grid-template-columns: 1fr;
    }
  }
`;

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    name: "radio",
    options: [
      {
        value: text("Value", "arweave"),
        title: text("Title", "arweave"),
        info: text("Info", "Connected on 2/24/2022, 10:23"),
        price: text("Price", "0.002 AR / MB"),
        icon: "tv",
        active: boolean("Active", true),
      },
      {
        value: "nftstorage",
        title: "NFTStorage",
        info: "Connected on 2/24/2022, 10:23",
        price: "Free",
        icon: "tv",
        active: false,
      },
      {
        value: "filecoin_ipfs",
        title: "Filecoin / IPFS",
        info: "Connected on 3/23/2022, 11:28",
        price: "0.002 FIL / MB",
        icon: "tv",
        active: true,
      },
      {
        value: "pinanta",
        title: "Pinanta",
        info: "Connected on 4/31/2022, 05:11",
        price: "$0.15 per GB / month",
        icon: "tv",
        active: false,
      },
    ],
    activeLabel: "Active",
    register,
  };

  const values = watch();
  console.log("values: ", values);

  return (
    <StyledUl>
      <RadioList {...defaultProps} />
    </StyledUl>
  );
};
