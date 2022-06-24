import Layout from "../components/layout/layout";
import "../styles/globals.css";
//* it is necessary for using useSession to wrap component with session Provider
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
