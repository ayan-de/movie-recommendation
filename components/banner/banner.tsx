import styles from "./banner.module.css";
import Image from "next/image";
type BannerProps = {
  title: string;
  subTitle: string;
  imgUrl: string;
};

const Banner = ({ title, subTitle, imgUrl }: BannerProps) => {
  const handleOnPlay = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.pixyseriesWrapper}>
            <p className={styles.firstLetter}>Pixy</p>
            <p className={styles.series}>P R E S E N T S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src="/static/playarrow.svg"
                width={32}
                height={32}
                alt="Play button"
              ></Image>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          // backgroundImage: `url(${imgUrl}`,
          backgroundImage: `url(${imgUrl})`,
          //   width: "100%",
          //   height: "100%",
          //   position: "absolute",
          //   backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Banner;
