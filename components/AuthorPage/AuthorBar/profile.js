import Head from "next/head";
import profileStyles from "./profile.module.css";
import Tag from "../../Tags/tag";

function Profile({
    authorName,
    spans,
    description,
    tags,
    image,
    icons
}){
    const {color, size} = tags;
    const {fb, ins} = icons;
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <article>
                <div className={profileStyles.background}>
                    <div className={profileStyles.center}>
                        <img src = {image} className={profileStyles.image}/>
                        <h1 className={profileStyles.authorName}>{authorName}</h1>
                        <Tag content = {spans[0]} color = {color} size = {size}/>
                        <Tag content = {spans[1]} color = {color} size = {size}/>
                        <br></br>
                        <br></br>
                        <p className={profileStyles.param}>{description}</p>
                        <img className = {profileStyles.logo} src = {fb}/>
                        <img className = {profileStyles.logo} src = {ins}/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Profile