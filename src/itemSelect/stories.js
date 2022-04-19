import React from "react";
import styled from "styled-components";
import { StoryWrapper } from "../../.storybook/decorators";
import { ItemSelect } from "./ItemSelect";
import { useForm } from "react-hook-form";

export default {
  title: "ItemSelect",
  component: ItemSelect,
  decorators: [StoryWrapper],
};

const Container = styled.div`
  width: 100%;
`;

const options = [
  {
    id: 12222342435,
    coverSrc:
      "https://creatorshub.s3.eu-central-1.amazonaws.com/0xbC80A63aA97633aEe78caB002E3fcCEeaF21b506/nftFiles/119/cover/7DCAFA29-0898-4B43-B085-046461C9A606.jpeg",
    title: "Sneackers",
  },
  {
    id: 1227898935,
    coverSrc:
      "https://creatorshub.s3.eu-central-1.amazonaws.com/0xbC80A63aA97633aEe78caB002E3fcCEeaF21b506/nftFiles/147/cover/images.jpeg",
    title: "Jordans",
  },
  {
    id: 9022372435,
    coverSrc:
      "https://creatorshub.s3.eu-central-1.amazonaws.com/0x3391fE5A9B72A737E0F7e0461b4Cf7F977c8C59A/nftFiles/170/cover/Metabear.png",
    title: "Glasses",
  },
];

export const main = () => {
  const { control, setValue, register, watch } = useForm();

  const formData = watch();

  console.log(formData);

  return (
    <Container>
      <ItemSelect
        control={control}
        register={register}
        setValue={setValue}
        options={options}
      />
    </Container>
  );
};
