import Head from "next/head";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

function Article({
    title,
    subtitle,
    tag,
    author,
    date,
    length,
    children
}){
    return (
        <>
            <Head>
                <title>SciQuel</title>
            </Head>
            <article>
                <div className={utilStyles.background}>
                    <div className={utilStyles.center}>
                        <h1 className={utilStyles.heading2Xl}>
                            {title}
                        </h1>
                        <h2 className={utilStyles.headingXl}>
                            {subtitle}
                        </h2>
                        <span className={utilStyles.span}>{tag}</span>
                        <p>
                            {author}
                            <br></br>
                            <Date dateString={date}/> | {length}
                        </p>
                    </div>
                </div>
                <div className={utilStyles.center}>
                   {children}
                </div>
            </article>
        </>
    );
}

export default Article;
