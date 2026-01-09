import VehicleCard from "src/components/common/vehicle-card";
import {
  SectionContainer,
  SectionHeading,
} from "src/components/common/section";
import { useUser } from "src/hooks";
import React from "react";

const DriverVehicles: React.FC = () => {
  const { data } = useUser();
  const user = data?.user!;

  return (
    <SectionContainer>
      <SectionHeading>{user.firstname.toUpperCase()}'S VEHICLES</SectionHeading>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {React.Children.toArray(
          user.vehicles.map((vehicle) => <VehicleCard vehicle={vehicle} />)
        )}
      </div>
    </SectionContainer>
  );
};

export default DriverVehicles;
