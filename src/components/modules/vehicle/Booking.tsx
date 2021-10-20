import { addDays } from "date-fns";
import { Button, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Form, FormDatePicker, FormButton } from "src/components/common/form";
import { SectionContainer } from "src/components/common/section";
import { vehicleResolver } from "src/services/validations/vehicle";
import { FormValues } from "src/utils/types";
import { useBookingStyles } from "./styles";

interface Props {
  btnIcon: React.ReactNode;
  btnText: string;
}

const VehicleBooking: React.FC<Props> = ({ btnIcon, btnText }) => {
  const [refundDate, setRefundDate] = useState(addDays(new Date(), 1));
  const classes = useBookingStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      startDate: addDays(new Date(), 2),
      endDate: addDays(new Date(), 4),
    },
    resolver: vehicleResolver,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRefundDate(addDays(new Date(), 1));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [refundDate]);

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const dividerElement = <Divider style={{ margin: "1rem auto" }} />;
  return (
    <SectionContainer>
      <Typography style={{ display: "flex", alignItems: "center" }}>
        <strong style={{ fontSize: "1.5rem", marginRight: "0.3rem" }}>
          $360
        </strong>{" "}
        / day
      </Typography>
      <Typography variant="caption" color="textSecondary">
        $1,800 estimated total + fees
      </Typography>

      {dividerElement}
      <Form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="startDate"
          render={({ field: { value, onChange, name } }) => (
            <FormDatePicker
              errors={errors}
              label="Trip start"
              name={name}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="endDate"
          render={({ field: { value, onChange, name } }) => (
            <FormDatePicker
              errors={errors}
              label="Trip end"
              name={name}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <FormButton style={{ margin: 0 }}>Continue</FormButton>
      </Form>

      {dividerElement}
      <div className={classes.tripCancellationWrapper}>
        <Typography>
          <strong>Free cancellation</strong>
        </Typography>
        <Typography color="textSecondary">
          Full refund before{" "}
          {refundDate.toLocaleString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      </div>

      {dividerElement}
      <Button
        className={classes.button}
        fullWidth
        size="large"
        startIcon={btnIcon}
        variant="outlined"
      >
        {btnText}
      </Button>
    </SectionContainer>
  );
};

export default VehicleBooking;
