import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppContext } from "@/context/AppContext";
import App from "next/app";

type TProps = AppProps & {
  categories: any;
}

export default function _App({Component, pageProps: {...pageProps}, categories}: TProps) {
  return (
    <AppContext
      data={{categories: categories}}
    >
      <AppLayout>
        <Head>
          <title>Loofytech</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
      </AppLayout>
    </AppContext>
  );
}

_App.getInitialProps = async (context: any) => {
  const base = process.env.NODE_ENV == "development" ? "http://localhost:8000" : "https://blog.loofytech.com";

  const pageProps = await App.getInitialProps(context);
  try {
    const [gCategories] = await Promise.all([
      fetch(`${base}/data/categories.json`),
    ]);
    const [categories] = await Promise.all([
      gCategories.json(),
    ]);

    return {...pageProps, categories}
  } catch (error) {
    console.log(error);
  }
}
