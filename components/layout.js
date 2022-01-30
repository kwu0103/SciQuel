import Head from 'next/head'
import styles from './layout.module.css'
import Header from './header'
import Footer from './footer'

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