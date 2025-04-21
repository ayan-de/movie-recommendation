import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import classNames from "classnames";

//__next is the root id of our app
Modal.setAppElement("#__next");
const Video = () => {
  const router = useRouter();
  console.log({ router });

  return (
    <div className={styles.container}>
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
      </Modal>
    </div>
  );
};

export default Video;
