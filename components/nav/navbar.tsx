import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link"; //learn this powerful
import { useState, useEffect } from "react";
import Image from "next/image";
import { magic } from "../../lib/magic-client";

// type NavBarProps = {
//   username: string;
// };
const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");

  const router = useRouter();

  //displayind dynamic username
  //extracting from magic
  useEffect(() => {
    async function getUsername() {
      try {
        const { email, issuer } = await magic.user.getInfo();
        const didToken = await magic.user.getIdToken();
        console.log({ didToken });
        console.log({ email });
        setUsername(email);

        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log("Error retrieving email:", error);
      }
    }
    getUsername();
  }, []);

  const handleOnClickHome = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropDown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn()); // => `false`
      router.push("/login");
    } catch (error) {
      console.log("Error loggin out email:", error);
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
          <div className={styles.logoWrapper}>PixyBox</div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            About Us
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            Case Study
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropDown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/static/dropdownWhite.svg"
                width={32}
                height={32}
                alt="dropdown button"
              ></Image>
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  {/* change this asap */}
                  <a className={styles.linkName} onClick={handleSignOut}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
