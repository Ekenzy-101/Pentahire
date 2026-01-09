import Head from "next/head";

import { COMPANY_NAME } from "src/utils/constants";
import { theme } from "../foundation";

interface Props {
  title?: string;
  description?: string;
}

const defaultTitle = `${COMPANY_NAME} - Find the perfect car, shared by trusted hosts in Nigeria`;
const defaultDescription =
  "Find car rental alternatives in Nigeria. Book better cars shared by local hosts and pay up to 35% less than car rental agencies.";

const SEO: React.FC<Props> = ({
  title = defaultTitle,
  description = defaultDescription,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta name="description" content={description} />

      <meta property="og-type" content="website" />
      <meta property="og-title" content={title} />
      <meta property="og-description" content={description} />
    </Head>
  );
};

export default SEO;
