import Head from "next/head";
import Date from "../../components/date"
import utilStyles from "../../styles/utils.module.css"
import AuthorBox from "../../components/Article/AuthorBox/authorBox";
import DefBox from "../../components/Article/DefinitionBox/defBox";
import Tag from "../../components/Tags/tag";


function Post(){

    const term = "Esential Amino Acid";
    const definition = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens. How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const inContext = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const authorName = 'Edward Chen';
    const desc = 'Edward Chen is a second-year Immunology MMSc student at Harvard Medical School. He wonders whether there’s a biologically useful concept of “Hycean organisms”; humans, after all, are up to 60% water.';
    const image = "/SciQuel_1.png";

    return (
        <>
            <Head>
                <title>This is head</title>
            </Head>
            <article>
                <div className={utilStyles.background}>
                    <div className={utilStyles.center}>
                        <h1 className={utilStyles.heading2Xl}>LIGHT. CAMERA. ACTION!</h1>
                        <h2 className={utilStyles.headingXl}>How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens</h2>
                        <Tag content = 'biology' color = 'orange' size = '15px'/>
                        <p>
                            written by Edward Chen
                            <br></br>
                            figures by Jovana Andrejevic
                            <br></br>
                            <Date dateString='2021-07-05'/> | 8 min read
                        </p>
                    </div>
                </div>
                <div className={utilStyles.center}>
                    content goes here
                </div>
            </article>
            <DefBox 
                term = {term} 
                definition={definition} 
                inContext={inContext}
            />
            <AuthorBox 
                image = {image} 
                authorName = {authorName} 
                desc = {desc} 
            />
        </>
    )
}

export default Post