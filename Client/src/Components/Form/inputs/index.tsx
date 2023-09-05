import React from "react";

// Material-UI
import { TextField, Typography } from "@mui/material";

// =================================================================================================

type inputType = {
  type: string;
  name: string;
  id: string;
  label: string;
  multiline?: boolean;
  rowsMax?: string;
  variant?: "standard" | "filled" | "outlined";
  inputRef?: any;
  value: string | number;
  onChange: Function;
  errors?: any;
  disabled?: boolean;
};

const inputForm: React.FC<inputType> = ({
  type,
  name,
  id,
  label,
  multiline,
  rowsMax,
  variant,
  inputRef,
  value,
  onChange,
  errors,
  disabled,
}) => {
  console.log(inputRef);

  return (
    <>
      <TextField
        style={{ margin: "5px 0px" }}
        type={type}
        name={name}
        id={id}
        label={label}
        multiline={multiline}
        variant={variant}
        maxRows={rowsMax}
        {...inputRef}
        disabled={disabled}
        value={value}
        onChange={(text) => onChange(text.target.value)}
      />
    </>
  );
};

export default inputForm;
