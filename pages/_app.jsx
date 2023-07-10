import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Жирные Бургеры</title>
        <meta name="title" content="Жирные бургеры" />
        <meta name="description" content="Купить вкусные дешевые с доставкой домой" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
