import dynamic from "next/dynamic";
import {
  SectionContainer,
  SectionHeading,
} from "src/components/common/section";
import { useVehicle } from "src/hooks";

const Map = dynamic(() => import("src/components/common/Map"), {
  ssr: false,
});

const VehicleLocation = () => {
  const { data } = useVehicle();
  const location = data?.vehicle.location!;

  return (
    <SectionContainer>
      <SectionHeading>LOCATION</SectionHeading>
      <Map
        center={{ lat: location.latitude, lng: location.longitude }}
        zoom={8}
        style={{ minHeight: "350px" }}
      />
    </SectionContainer>
  );
};

export default VehicleLocation;
