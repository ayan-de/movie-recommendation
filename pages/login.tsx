import Head from "next/head";
import styles from "../styles/login.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";

//route so according to rule a react component
const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  //adding router events
  //so we are adding loading while the route change process is taking place
  //refer docs
  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    //listening to event
    router.events.on("routeChangeComplete", handleComplete);
    //handling error event
    router.events.on("routeChangeError", handleComplete);

    //component unmounted with off method
    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    console.log("hi button");
    setIsLoading(true);
    if (email) {
      if (email === "deayan252@gmail.com") {
        //  log in a user by their email
        try {
          const didToken = await magic.auth.loginWithMagicLink({
            email,
          });
          console.log({ didToken });
          if (didToken) {
            // setIsLoading(false);
            // route to dashboard
            //we get didToken becoz our session net expired yet
            router.push("/");
          }
        } catch (error) {
          // Handle errors if required!
          setIsLoading(false);
          console.error("Something went wrong logging in", error);
        }
      } else {
        setIsLoading(false);
        setUserMsg("Something went wrong logging in");
      }
    } else {
      // show user message
      setIsLoading(false);
      setUserMsg("Enter a valid email/Phone No");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PixyBox SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link legacyBehavior className={styles.logoLink} href="/">
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>PixyBox</div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email address/Phone No"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
