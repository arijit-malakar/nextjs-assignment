import Layout from "../common/Layout";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      headerStatus={pageProps.headerStatus}
      footerStatus={pageProps.footerStatus}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
