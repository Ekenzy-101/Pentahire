import Header from "src/components/common/header";
import LoadingPage from "src/components/common/LoadingPage";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import AccountBody from "src/components/modules/account";
import { usePrivateRoute } from "src/hooks";
import { COMPANY_NAME } from "src/utils/constants";

const AccountPage = () => {
  const { loading } = usePrivateRoute();
  return (
    <>
      <SEO title={`Account - ${COMPANY_NAME}`} />
      {loading ? (
        <LoadingPage />
      ) : (
        <EnhancedPaper>
          <Header />
          <AccountBody />
        </EnhancedPaper>
      )}
    </>
  );
};

export default AccountPage;
