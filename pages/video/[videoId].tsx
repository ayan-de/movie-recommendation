import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

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
        <div>Modal body</div>
      </Modal>
    </div>
  );
};

export default Video;
