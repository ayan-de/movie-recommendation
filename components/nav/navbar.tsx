import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link"; //learn this powerful
import { useState } from "react";
import Image from "next/image";

type NavBarProps = {
  username: string;
};
const NavBar = (props: NavBarProps) => {
  const { username } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

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

  const handleShowDropDown = () => {
    setShowDropdown(!showDropdown);
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
                  <Link legacyBehavior href="/login">
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
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
