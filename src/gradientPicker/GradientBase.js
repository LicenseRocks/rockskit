import React, { useEffect, useState } from "react";
import { ColorPicker } from "react-color-gradient-picker";
import "react-color-gradient-picker/dist/index.css";
import styled from "styled-components";
import { Input } from "../Form";
import { Modal } from "../Modal";
import { GradientPickerPropTypes, GradientPickerDefaultProps } from "./props";

const Picker = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 26px;
  border-radius: 12px;
  border: 1px solid #dad9dd;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 8px;
  max-height: 5px !important;
  width: 100%;
  background: ${({ color }) => color};
`;

const PickerModal = styled(Modal)`
  .MuiDialog-paper {
    max-width: 340px;
    padding: 16px;
    min-height: 400px;
  }

  .MuiDialogContent-root {
    padding: 16px 0;
  }
`;

const OnClickPicker = ({ pickColors, color }) => {
  return (
    <Picker onClick={pickColors}>
      <Content color={color} />
    </Picker>
  );
};

const gradient = {
  points: [
    {
      left: 0,
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1,
    },
    {
      left: 100,
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
    },
  ],
  degree: 0,
  type: "linear",
  style: "rgba(0, 0, 0)",
};

export const GradientBase = ({
  withModal,
  modalTitle,
  defaultValues,
  modalActionTitle,
  ...props
}) => {
  const [gradientAttrs, setGradientAttrs] = useState(gradient);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (defaultValues) {
      setGradientAttrs(defaultValues);
    }
  }, [defaultValues]);

  const onChange = (gradientAttrs) => {
    setGradientAttrs(gradientAttrs);
  };

  const pickColors = () => {
    setOpenModal(true);
  };

  return (
    <>
      {withModal ? (
        <>
          <OnClickPicker pickColors={pickColors} color={gradientAttrs?.style} />
          <PickerModal
            title={modalTitle ? modalTitle : "Select gradient"}
            onClose={() => setOpenModal(false)}
            isOpen={openModal}
            action={() => {
              setOpenModal(false);
            }}
            actionTitle={modalActionTitle ? modalActionTitle : "Save"}
          >
            <ColorPicker
              onStartChange={onChange}
              onChange={onChange}
              onEndChange={onChange}
              gradient={gradientAttrs}
              isGradient
            />
          </PickerModal>
        </>
      ) : (
        <ColorPicker
          onStartChange={onChange}
          onChange={onChange}
          onEndChange={onChange}
          gradient={gradientAttrs}
          isGradient
        />
      )}
    </>
  );
};

GradientBase.propTypes = GradientPickerPropTypes;

GradientBase.defaultProps = GradientPickerDefaultProps;
