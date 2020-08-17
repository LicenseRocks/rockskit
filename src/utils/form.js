// Get an array of error messages for a form row
export const getFormRowErrors = (errors, fields) =>
  Object.keys(errors).map((errKey) =>
    fields.includes(errKey) ? errors[errKey]?.message : null
  );

// Get error for an input from errors object
export const getFormInputError = (errors, field) =>
  errors[field] ? errors[field] : null;
