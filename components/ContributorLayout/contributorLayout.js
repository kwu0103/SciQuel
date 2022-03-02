import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./contributorLayout.module.css"

export default function ContributorLayout({children}){
    return (
        <>
            <header>
                <Header/>
            </header>
                <div className={styles.container}>
                    <main className={styles.main}>{children}</main>
                </div>
            <Footer/>
        </>
    )
}