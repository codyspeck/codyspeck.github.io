import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cody Peck - Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
