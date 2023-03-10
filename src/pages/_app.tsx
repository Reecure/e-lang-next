import "../assets/main.css";
import { FC } from "react";
import Layout from "@/components/common/Layout/Layout";
const Noop = ({ children }: any) => <>{children}</>;

function MyApp({ Component, pageProps }: any & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
