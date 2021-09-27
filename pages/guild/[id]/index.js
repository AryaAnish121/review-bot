import Head from 'next/head';
import appBaseUrl from '../../../components/appBaseUrl';
import Review from '../../../components/Review';
import styles from '../../../styles/Guild.module.css';

const Guild = ({ serverName, reviews }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reviews for {serverName ? serverName : 'Unknown server'}</title>
      </Head>
      {serverName ? (
        <div className={styles.server}>
          <h1 className={styles.serverName}>Reviews for "{serverName}"</h1>
          <div className={styles.reviews}>
            {reviews.map((review, index) => {
              return <Review key={index} {...review} />;
            })}
          </div>
        </div>
      ) : (
        <div className={styles.notFound}>
          <h1>
            404 <span>Server not found</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Guild;
export const getServerSideProps = async (context) => {
  const guildId = context.query.id;

  const res = await fetch(`${appBaseUrl}/guild/${guildId}`);
  const data = await res.json();

  return {
    props: data,
  };
};
