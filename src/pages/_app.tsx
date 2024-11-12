import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>My Header</header>
      <Component {...pageProps} />
      <footer>My Footer</footer>
    </>
  );
}

export default MyApp;
