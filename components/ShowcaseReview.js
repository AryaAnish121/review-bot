import Rating from '@mui/material/Rating';
import styles from '../styles/ShowCaseRaing.module.css';

const ShowcaseReview = ({ title, content, rating }) => {
  return (
    <div className={styles.rating}>
      <Rating
        name="read-only"
        size="small"
        value={rating}
        precision={0.5}
        readOnly
      />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default ShowcaseReview;
