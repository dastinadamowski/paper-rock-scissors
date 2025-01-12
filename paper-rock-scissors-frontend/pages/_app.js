import "../styles/globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ConvexClientProvider>
      <Component {...pageProps} />
    </ConvexClientProvider>
  );
}

export default MyApp;
