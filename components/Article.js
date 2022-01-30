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
                    <div className={utilStyles.centertitle}>
                        <h1 className={utilStyles.heading2Xl}>
                            {title}
                        </h1>
                    </div>
                    <div className={utilStyles.centersubtitle}>
                        <h2 className={utilStyles.headingXl}>
                            {subtitle}
                        </h2>
                    </div>
                </div>
                <div className={utilStyles.centerarticle}>
                    <b>Article</b> | <b>Essay</b> | <span className={utilStyles.span}>{tag}</span>
                    <br /> <br />
                    <h5>
                        {author}
                        </h5>
                    <h5>
                        <Date dateString={date}/> | {length}
                    </h5>
                    <br />
                    {children}
                </div>
            </article>
        </>
    );
}

export default Article;
