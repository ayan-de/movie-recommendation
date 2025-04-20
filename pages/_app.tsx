import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { magic } from "@/lib/magic-client";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // route to /
        router.push("/");
      } else {
        // route to /login
        router.push("/login");
      }
    };
    handleLoggedIn();
  }, []);
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
