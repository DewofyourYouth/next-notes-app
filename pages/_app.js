import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
