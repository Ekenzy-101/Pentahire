import React from "react";

import VehicleCard from "src/components/common/vehicle-card";
import {
  SectionButton,
  SectionContainer,
  SectionHeading,
} from "src/components/common/section";
import { useReviewsStyles } from "./styles";

const vehicle = {
  id: "60c232cec04ea165125ff654",
  created_at: "2021-06-18T07:12:33.024Z",
  image: "https://pentahire.s3.amazonaws.com/vehicles/60c232cec04ea165125ff654",
  reviews_count: 3,
  make: "bmw",
  name: "BMZ 7 Series 2016",
  rentalFee: 190,
  average_rating: 4.8,
  user_id: "60b88c2042d499ba9b65958f",
};

const DriverFavourites: React.FC = () => {
  const vehicles = [0, 1, 2];
  const classes = useReviewsStyles();
  return (
    <SectionContainer>
      <SectionHeading>ONYEKABA'S FAVOURITES</SectionHeading>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {React.Children.toArray(
          vehicles.slice(0, 2).map(() => <VehicleCard vehicle={vehicle} />)
        )}
      </div>
      <SectionButton className={classes.button}>
        View All Favourites
      </SectionButton>
    </SectionContainer>
  );
};

export default DriverFavourites;
