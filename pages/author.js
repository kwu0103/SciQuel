import Profile from "../components/AuthorPage/AuthorBar/profile";
import Cards from "../components/HomePage/Cards/cards";

function Author(){
    
    const authorName = 'Edward Chen';
    const spans = ['biology', 'math'];
    const description = 'How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens';
    const tags = {
        color: '#D28161',
        size: '15px'
    };
    const image = "/SciQuel_1.png";
    const icons = {
        fb: "/facebook.png",
        ins: "/instagram-2.png"
    }
    const tagCard = {
        color: '#D28161',
        size: '10px',
        contentTag: 'biology'
    };
    const title = "Lights. Camera. Action!";
    const content = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const authorCard = "Edward Chen";
    const kind = "ARTICLE";
    const imageCard = '/bobtail.png'
    const day = {
        date: 17,
        month: 1,
        year: 2022
    }
    return (
        <>
                <Profile 
                    image = {image} 
                    authorName={authorName} 
                    spans = {spans} 
                    description={description} 
                    tags = {tags}
                    image = {image}
                    icons = {icons}
                />
                <Cards
                    title = {title}
                    content = {content}
                    authorCard = {authorCard}
                    kind = {kind}
                    day = {day}
                    imageCard = {imageCard}
                    tagCard = {tagCard}
                />

        </>
    )
}

export default Author