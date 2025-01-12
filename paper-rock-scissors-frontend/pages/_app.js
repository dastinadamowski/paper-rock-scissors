import "../styles/globals.css";
import { ConvexClientProvider } from "../components/ConvexClientProvider";


function MyApp({ Component, pageProps }) {
  return (
    <ConvexClientProvider>
      <Component {...pageProps} />
    </ConvexClientProvider>
  );
}

export default MyApp;
