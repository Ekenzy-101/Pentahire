import Header from "src/components/common/header";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import { COMPANY_NAME } from "src/utils/constants";

const NotFoundPage = () => {
  return (
    <EnhancedPaper>
      <SEO title={`This page doesn't exist - ${COMPANY_NAME}`} />
      <Header />
      <NotFoundPage />
    </EnhancedPaper>
  );
};

export default NotFoundPage;
