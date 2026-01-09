import { enUS } from "date-fns/locale";

import {
  TextFieldProps,
  TextField,
  Box,
  TextareaAutosizeProps,
  Typography,
  TextareaAutosize,
  MenuItem,
  capitalize,
} from "@mui/material";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { UseFormRegister, DeepMap, FieldError } from "react-hook-form";

import { useStyles } from "./styles";
import { FormValues } from "src/utils/types";

interface Option {
  value: string;
  label: string;
}

interface ExternalFieldProps {
  options?: Option[];
  errors?: Partial<DeepMap<FormValues, FieldError>>;
  name: keyof Omit<FormValues, "image">;
  register?: UseFormRegister<FormValues>;
}

type FormTextFieldProps = TextFieldProps & ExternalFieldProps;

export const FormTextField: React.FC<FormTextFieldProps> = ({
  register,
  name,
  errors,
  select,
  options,
  style,
  ...textFieldProps
}) => {
  const commonProps = {
    error: Boolean(errors && errors[name]?.message),
    helperText: errors && errors[name]?.message,
    fullWidth: true,
    inputRef: register?.(name).ref,
    label: capitalize(name),
    onChange: register?.(name).onChange,
    onBlur: register?.(name).onBlur,
    name,
    size: "small" as const,
    style: { margin: "1rem auto", ...style },
    variant: "outlined" as const,
  };

  return (
    <TextField
      {...commonProps}
      {...textFieldProps}
      select={select}
      children={
        select && options
          ? React.Children.toArray(
              options.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))
            )
          : undefined
      }
    />
  );
};

interface FormTextAreaProps
  extends Omit<TextareaAutosizeProps, "name">,
    ExternalFieldProps {}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  register,
  name,
  errors,
}) => {
  const { classes, cx } = useStyles();

  const commonProps = {
    ...register?.(name),
    placeholder: capitalize(name),
    maxLength: 1000,
    rowsMax: 10,
    rowsMin: 6,
  };
  const message = errors && errors[name]?.message;

  return (
    <Box component="div" marginBottom="1rem">
      <TextareaAutosize
        className={
          message ? cx(classes.textarea, classes.error) : classes.textarea
        }
        {...commonProps}
      />
      {message ? (
        <Typography
          variant="caption"
          color="error"
          style={{ margin: "0 14px" }}
        >
          {message}
        </Typography>
      ) : null}
    </Box>
  );
};

interface FormDatePickerProps
  extends Omit<DatePickerProps, "name">,
    Omit<ExternalFieldProps, "register"> {}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  errors,
  ...pickerProps
}) => {
  const commonProps = {
    error: Boolean(errors && errors[name]?.message),
    helperText: errors && errors[name]?.message,
    fullWidth: true,
    disablePast: true,
    label: capitalize(name),
    name,
    size: "small" as const,
    variant: "inline" as const,
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DatePicker {...commonProps} {...pickerProps} />
    </LocalizationProvider>
  );
};

interface FormFileFieldProps
  extends Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "name" | "onChange" | "value"
    >,
    Omit<ExternalFieldProps, "register" | "name"> {
  onChange: (e: any) => void;
  value: File | null;
  name: keyof Pick<FormValues, "image">;
}
export const FormFileField: React.FC<FormFileFieldProps> = ({
  name,
  value,
  errors,
  onChange,
  ...fileProps
}) => {
  const { classes, cx } = useStyles();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      onChange(null);
    } else {
      onChange(files[0]);
    }
  };

  const message = errors && (errors[name] as any)?.message;
  return (
    <>
      <Box
        component="div"
        className={
          message ? cx(classes.fileWrapper, classes.error) : classes.fileWrapper
        }
      >
        <input
          accept="image/jpeg,image/png"
          className={classes.fileInput}
          name={name}
          onChange={handleChange}
          type="file"
          {...fileProps}
        />
        <Typography>
          {value ? value.name : "Upload Image less than 200KB"}
        </Typography>
      </Box>
      {message ? (
        <Typography
          variant="caption"
          color="error"
          style={{ margin: "0 14px 16px 14px" }}
        >
          {message}
        </Typography>
      ) : null}
    </>
  );
};
