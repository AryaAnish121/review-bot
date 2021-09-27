import Rating from '@mui/material/Rating';
import styles from '../styles/Reviews.module.css';

const Review = ({ review, title, content, userName }) => {
  return (
    <div className={styles.reviewContainer}>
      <Rating
        name="read-only"
        size="small"
        value={review}
        precision={0.5}
        readOnly
      />
      <h1 className={styles.title}>{title}</h1>
      <q className={styles.content}>{content}</q>
      <p className={styles.author}>{userName}</p>
    </div>
  );
};

export default Review;
