import Head from 'next/Head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './HomepageLayout.module.css';

export default function HomepageLayout({ children }) {
  return (
    <>
      <Head>
        <title>SciQuel</title>
      </Head>

      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};
