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
        <Card imgUrl="/static/animal.jpg" size="large" />
        <Card imgUrl="/static/animal.jpg" size="large" />
        <Card imgUrl="/static/animal.jpg" size="large" />
        <Card imgUrl="/static/animal.jpg" size="large" />
        <Card imgUrl="/static/animal.jpg" size="large" />
        <Card imgUrl="/static/animal.jpg" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
