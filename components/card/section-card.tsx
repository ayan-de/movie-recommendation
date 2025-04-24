import Card from "./card";
import styles from "./section-cards.module.css";
import Link from "next/link";

type Video = {
  imgUrl: string;
};

type SectionProps = {
  title: string;
  videos: Video[]; // array of Video object
  size: string;
};
const SectionCards = (props: SectionProps) => {
  const { title, videos = [], size } = props; //so here we will get array of videos and size of that section
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          // console.log(video);
          return (
            <Link key={idx} href={`/video/${video.id}`}>
              <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
