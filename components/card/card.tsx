import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type CardProps = {
  imgUrl: string;
  size: string;
};
const Card = (props: CardProps) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size = "medium",
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("Image not loaded Properly");
    setImgSrc(
      "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={classNames(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
