import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShowcaseReview from '../components/ShowcaseReview';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [serverId, setServerId] = useState('');
  const [focused, setFocused] = useState(false);
  const [reviews] = useState([
    {
      rating: 4.5,
      title: 'Nice server',
      content:
        "This is a nice server but there's one problem two people are talking at the same time about different things",
    },
    {
      rating: 5,
      title: 'Loving the server',
      content:
        'Just love the server, I recommend joining this server too. Also, I love how staffs maintain the server.',
    },
    {
      rating: 3.5,
      title: 'Average server',
      content:
        'Just an average server, and I get warned everytime even if I do noting.',
    },
  ]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setServerId(value);
  };

  const handleFocus = () => {
    setFocused(!focused);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/guild/${serverId}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Review Bot</title>
        <meta
          name="description"
          content="Get reviews of you discord server using review bot, start using it."
        />
        <meta name="keywords" content="Review, Bot, Discord" />
      </Head>
      <div className={styles.search}>
        <div className={styles.media}>
          <img
            src="/search-background.svg"
            alt="background"
            className={styles.searchBackground}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.searchContent}>
          <h1 className={styles.searchHeading}>
            <a href="https://top.gg/bot/dsfsdf">Review Bot</a>
          </h1>
          <div className={`${focused && styles.focused} ${styles.searchInput}`}>
            <input
              placeholder="Enter your server id (type ?serverId to get the id)"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleFocus}
              value={serverId}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
      <div className={styles.reviews}>
        {reviews.map((review, index) => {
          return <ShowcaseReview key={index} {...review} />;
        })}
      </div>
    </div>
  );
}
