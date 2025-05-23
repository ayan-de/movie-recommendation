import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import classNames from "classnames";
import NavBar from "@/components/nav/navbar";

//__next is the root id of our app
Modal.setAppElement("#__next");

//Implement Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  //data to be fetched from API
  const video = {
    title: "Hi cute dog",
    publishTime: "1990-01-01",
    description: "A big red dog that is super cute, can he get any bigger?",
    channelTitle: "Paramount Pictures",
    viewCount: 10000,
  };

  return {
    props: {
      video,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  //list of videos we want isr to go and rebuid
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

const Video = ({ video }) => {
  const router = useRouter();
  console.log({ router });

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div className={styles.container}>
      <NavBar />
      {/* video page {router.query.videoId} */}
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        //if we click on the outside we get back or by pressing ESC
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          type="text/html"
          className={classNames(styles.videoPlayer, styles.borderBoxShadow)}
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameBorder="0"
        ></iframe>

        {/* video description */}
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={classNames(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={classNames(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
