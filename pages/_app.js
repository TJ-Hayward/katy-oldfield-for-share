import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "../stores/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div className="globalTheme">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
