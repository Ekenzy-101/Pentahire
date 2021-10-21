import React from "react";

import Header from "src/components/common/header";
import LoadingPage from "src/components/common/LoadingPage";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import NotFoundBody from "src/components/common/NotFound";
import VehicleBody from "src/components/modules/vehicle";
import { useVehicle } from "src/hooks";
import { COMPANY_NAME } from "src/utils/constants";

const VehiclePage = () => {
  const { data, isLoading } = useVehicle();
  const vehicle = data?.vehicle;

  return (
    <EnhancedPaper>
      <SEO
        title={
          vehicle
            ? `${vehicle.name} rental in ${vehicle.address} by ${vehicle.user?.firstname} - ${COMPANY_NAME}`
            : isLoading
            ? `Vehicle Profile - ${COMPANY_NAME}`
            : `This page doesn't exist - ${COMPANY_NAME}`
        }
      />
      <Header />
      {vehicle ? (
        <VehicleBody />
      ) : isLoading ? (
        <LoadingPage />
      ) : (
        <NotFoundBody />
      )}
    </EnhancedPaper>
  );
};

export default VehiclePage;
