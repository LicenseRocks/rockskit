import React from "react";
import { Controller } from "react-hook-form";

import { FilePondComponent } from "./Component";
import { FileUploadPropTypes, FileUploadDefaultProps } from "./props";

export const FilePond = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      as={<FilePondComponent defaultValue={defaultValue} {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{ required: isRequired }}
    />
  );
};

FilePond.propTypes = FileUploadPropTypes;

FilePond.defaultProps = FileUploadDefaultProps;
