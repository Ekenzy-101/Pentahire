import React from "react";

import Map from "src/components/common/Map";
import {
  SectionContainer,
  SectionHeading,
} from "src/components/common/section";
import { useVehicle } from "src/hooks";
import { LoadMapSuccessOptions } from "src/utils/types";

const VehicleLocation = () => {
  const { data } = useVehicle();
  const location = data?.vehicle.location!;

  const onLoadSuccess = ({ mapRef }: LoadMapSuccessOptions) => {
    new google.maps.Map(mapRef.current!, {
      zoom: 8,
      center: { lat: location.latitude, lng: location.longitude },
    });
  };

  return (
    <SectionContainer>
      <SectionHeading>LOCATION</SectionHeading>
      <Map style={{ minHeight: "350px" }} onLoadSuccess={onLoadSuccess} />
    </SectionContainer>
  );
};

export default VehicleLocation;
