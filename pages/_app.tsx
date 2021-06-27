import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-10">
      <Link href="/">
        <a>
          <h1 className="text-7xl font-bold mt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Big Brain React
            </span>
          </h1>
        </a>
      </Link>
      <div className="p-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
