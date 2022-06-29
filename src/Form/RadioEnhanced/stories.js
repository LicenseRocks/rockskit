import React from "react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";
import { StoryWrapper } from "../../../.storybook/decorators";
import { RadioEnhanced } from "./RadioEnhanced";

export default {
  title: "Form/RadioEnhanced",
  component: RadioEnhanced,
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
    width: 100%;

    ${({ theme }) => theme.breakpoints.down("md")} {
      grid-template-columns: 1fr;
    }
  }
`;

export const RadioEnhancedGrid = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    name: "radio",
    options: [
      {
        value: text("Value", "arweave"),
        title: text("Title", "arweave"),
        description: text("Description", "Arweave is a Decentralized Storage Network (DSN)"),
        price: text("Price", "0.002 AR / MB"),
        icon: text("Icon", "tv"),
      },
      {
        value: "nftstorage",
        title: "NFTStorage",
        description: "Free decentralized storage and bandwidth for NFTs",
        price: "Free",
        icon: "tv",
      },
      {
        value: "filecoin_ipfs",
        title: "Filecoin / IPFS",
        description: "Turns the world's unused storage into an algorithmic",
        price: "0.002 FIL / MB",
        icon: "tv",
      },
      {
        value: "pinanta",
        title: "Pinanta",
        description: "Pinata makes file storage easy for everyone.",
        price: "$0.15 per GB / month",
        icon: "tv",
      },
    ],
    register,
  };

  const values = watch();
  console.log("values: ", values);

  return (
    <RadioEnhancedGrid>
      <RadioEnhanced {...defaultProps} />
    </RadioEnhancedGrid>
  );
};
