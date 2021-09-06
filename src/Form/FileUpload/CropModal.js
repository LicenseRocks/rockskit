import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import AvatarEditor from "react-avatar-editor";
import styled from "styled-components";

import { FormRow, Modal } from "../..";

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CropModal = ({
  imgFile,
  isOpen,
  onClose,
  onSubmit,
  size,
  ...props
}) => {
  const [scale, setScale] = useState(1);
  const editorRef = createRef();

  const handleSubmit = () => {
    const img = editorRef.current.getImageScaledToCanvas();
    img.toBlob((blob) => {
      if (blob) {
        onSubmit(new File([blob], imgFile.name, blob));
        onClose();
      }
    });
  };

  return (
    <Modal
      action={handleSubmit}
      actionTitle="Save Changes"
      isOpen={isOpen}
      onClose={onClose}
      maxWidth={size}
      padding
      title="Crop Image"
      {...props}
    >
      <EditorWrapper>
        <AvatarEditor
          ref={editorRef}
          image={imgFile}
          width={size === "lg" ? 1920 : 400}
          height={400}
          border={20}
          color={[0, 0, 0, 0.6]} // RGBA
          scale={scale}
          rotate={0}
        />
      </EditorWrapper>

      <FormRow errors={{}} label="Zoom" fields={[]}>
        <input
          name="scale"
          type="range"
          onChange={(e) => setScale(parseFloat(e.target.value))}
          min="1"
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </FormRow>
    </Modal>
  );
};

CropModal.propTypes = {
  imgFile: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  size: PropTypes.string,
};

CropModal.defaultProps = {
  size: "md",
};
