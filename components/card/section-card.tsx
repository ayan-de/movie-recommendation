import Card from "./card";
import styles from "./section-cards.module.css";

type SectionProps = {
  title: string;
};
const SectionCards = (props: SectionProps) => {
  const { title } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card id="0" imgUrl="/static/animal.jpg" size="large" />
        <Card id="1" imgUrl="/static/animal.jpg" size="large" />
        <Card id="2" imgUrl="/static/animal.jpg" size="large" />
        <Card id="3" imgUrl="/static/animal.jpg" size="large" />
        <Card id="4" imgUrl="/static/animal.jpg" size="large" />
        <Card id="5" imgUrl="/static/animal.jpg" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
