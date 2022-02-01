import Head from "next/Head";
import contributorBarStyle from "./contributorBar.module.css";
import Tag from "../Tag/Tag";
// import BiologyTag from "../Tag/BiologyTag";
import Image from "next/image";

function ContributorBar({
    contributorName,
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
                <div className={contributorBarStyle.background}>
                    <div className={contributorBarStyle.center}>
                        <img src = {image} className={contributorBarStyle.image}/>
                        <h1 className={contributorBarStyle.contributorName}>{contributorName}</h1>
                        <Tag color={color}> {spans[0]} </Tag>
                        &nbsp;&nbsp;&nbsp;
                        <Tag color={color}> {spans[1]} </Tag>
                        <br></br>
                        <br></br>
                        <p className={contributorBarStyle.param}>{description}</p>
                        <img className = {contributorBarStyle.logo} src = {fb}/>
                        <img className = {contributorBarStyle.logo} src = {ins}/>
                        <img className = {contributorBarStyle.logo} src = {twitter}/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ContributorBar
