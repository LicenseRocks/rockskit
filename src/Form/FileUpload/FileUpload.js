import React from "react";
import { Controller } from "react-hook-form";

import { Dropzone } from "./Dropzone";
import { FileUploadPropTypes, FileUploadDefaultProps } from "./props";

export const FileUpload = ({
  control,
  defaultValue,
  isRequired,
  name,
  maxSize,
  ...props
}) => {
  console.log(maxSize);
  console.log(control);
  return (
    <Controller
      as={<Dropzone maxSize={maxSize} {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{
        required: isRequired,
      }}
    />
  );
};

FileUpload.propTypes = FileUploadPropTypes;

FileUpload.defaultProps = FileUploadDefaultProps;
