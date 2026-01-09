import Header from "src/components/common/header";
import LoadingPage from "src/components/common/LoadingPage";
import NotFoundBody from "src/components/common/NotFound";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import DriverBody from "src/components/modules/driver";
import { useUser } from "src/hooks";
import { COMPANY_NAME } from "src/utils/constants";

const DriverPage = () => {
  const { data, isPending } = useUser();
  const user = data?.user;

  return (
    <EnhancedPaper>
      <Header />
      <SEO
        title={
          user
            ? `${
                user.vehicles.length
                  ? `Book a Car with ${user.firstname}`
                  : user.firstname
              } - ${COMPANY_NAME}`
            : isPending
            ? `Driver Profile - ${COMPANY_NAME}`
            : `This page doesn't exist - ${COMPANY_NAME}`
        }
      />
      {user ? <DriverBody /> : isPending ? <LoadingPage /> : <NotFoundBody />}
    </EnhancedPaper>
  );
};

export default DriverPage;
