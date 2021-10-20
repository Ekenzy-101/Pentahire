import React from "react";
import { Typography } from "@material-ui/core";

import {
  SectionContainer,
  SectionHeading,
  SectionRating,
} from "src/components/common/section";
import { useVehicle } from "src/hooks";

const VehicleDetails = () => {
  const { data } = useVehicle();
  const vehicle = data?.vehicle!;

  return (
    <SectionContainer>
      <SectionHeading>THE CAR</SectionHeading>
      <Typography style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        {vehicle.name}
      </Typography>
      <Typography color="textSecondary">{vehicle.make}</Typography>
      {vehicle.reviews_count ? (
        <SectionRating
          rating={vehicle.average_rating}
          text={`(${vehicle.trips_count} trips)`}
        />
      ) : null}
    </SectionContainer>
  );
};

export default VehicleDetails;
