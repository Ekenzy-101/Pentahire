import React from "react";

import Header from "src/components/common/header";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import HomeBody from "src/components/modules/home";

const HomePage = () => {
  return (
    <EnhancedPaper>
      <SEO />
      <Header />
      <HomeBody />
    </EnhancedPaper>
  );
};

export default HomePage;
