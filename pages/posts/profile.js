import Head from "next/head";
import profileStyles from "../../styles/profile.module.css"


function Profile(){
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <article>
                <div className={profileStyles.backgroundProfile}>
                    <div className={profileStyles.centerProfile}>
                    <img src = "/cell.jpg" className={profileStyles.imageProfile}/>
                        <h1>Author Name</h1>
                        <span className={profileStyles.spanProfile}>biology</span>
                        <span className={profileStyles.spanProfile}>biology</span>
                        <p className={profileStyles.param}>
                        An author is the creator or originator of any written work such as a book or play, 
                        and is also considered a writer or poet. 
                        More broadly defined, an author... 
                        </p>
                        <img className = {profileStyles.logoProfile} src = "/facebook.png"/>
                        <img className = {profileStyles.logoProfile} src = "/instagram-2.png"/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Profile