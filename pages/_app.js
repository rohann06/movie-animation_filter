import Layout from "../components/Layout/index";
import "../styles/globals.css";
import StateContext from "../context/StateContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  );
}