import Head from 'next/head'
import styles from './layout.module.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SciQuel</title>
      </Head>
      
      <Header/>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer/>
    </>
  )
}
