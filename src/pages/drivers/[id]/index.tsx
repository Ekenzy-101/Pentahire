import React from "react";

import Header from "src/components/common/header";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import DriverBody from "src/components/modules/driver";
import { COMPANY_NAME } from "src/utils/constants";

const DriverPage = () => {
  const userHasCar = true;

  return (
    <EnhancedPaper>
      <Header />
      <SEO
        title={`${
          userHasCar ? "Book a Car with Onyekaba" : "Onyekaba"
        } - ${COMPANY_NAME}`}
      />
      <DriverBody />
    </EnhancedPaper>
  );
};

export default DriverPage;
