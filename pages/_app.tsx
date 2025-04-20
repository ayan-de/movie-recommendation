import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "@/lib/magic-client";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "next/font/google";
import Loading from "../components/loading/Loading";

const roboto = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return isLoading ? (
    <Loading />
  ) : (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
