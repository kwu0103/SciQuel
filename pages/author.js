import AuthorBar from "../components/AuthorBar/AuthorBar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

function Author(){
    
    const authorName = 'Edward Chen';
    const spans = ['biology', 'math'];
    const description = 'How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens';
    const tags = {
        color: '#D28161'
    };
    const image = "/SciQuel_1.png";
    const icons = {
        fb: "/facebook@512px.png",
        ins: "/instagram@512px.png",
        twitter: "/twitter@512px.png"
    }
    return (
        <>
                <AuthorBar 
                    image = {image} 
                    authorName={authorName} 
                    spans = {spans} 
                    description={description} 
                    tags = {tags}
                    icons = {icons}
                />
        </>
    )
}

export default Author
