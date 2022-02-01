import Head from "next/Head";
import AuthorBarStyle from "./AuthorBar.module.css";
import Tag from "../Tag/Tag";
// import BiologyTag from "../Tag/BiologyTag";

function AuthorBar({
    authorName,
    spans,
    description,
    tags,
    image,
    icons
}){
    const {color} = tags;
    const {fb, ins, twitter} = icons;

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <article>
                <div className={AuthorBarStyle.background}>
                    <div className={AuthorBarStyle.center}>
                        <img src = {image} className={AuthorBarStyle.image}/>
                        <h1 className={AuthorBarStyle.authorName}>{authorName}</h1>
                        <Tag color={color}> {spans[0]} </Tag>
                        &nbsp;&nbsp;&nbsp;
                        <Tag color={color}> {spans[1]} </Tag>
                        <br></br>
                        <br></br>
                        <p className={AuthorBarStyle.param}>{description}</p>
                        <img className = {AuthorBarStyle.logo} src = {fb}/>
                        <img className = {AuthorBarStyle.logo} src = {ins}/>
                        <img className = {AuthorBarStyle.logo} src = {twitter}/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AuthorBar
