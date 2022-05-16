import Head from "next/head";
import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification";
import { NotificationContextProvider } from "../store/notification-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <Notification title="TEST" message="this is a test" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
