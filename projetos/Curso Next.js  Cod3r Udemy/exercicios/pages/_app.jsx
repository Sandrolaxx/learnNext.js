import "../styles/globals.css";
import "../pages/css/integration01.css";
import AuthProvider from "../providers/auth";

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}