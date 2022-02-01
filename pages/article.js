import AuthorBox from "../components/AuthorBox/authorBox";
import DefBox from "../components/DefinitionBox/defBox";

function Article(){
    
    const term = "Esential Amino Acid";
    const definition = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens. How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const inContext = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const authorName = 'Edward Chen';
    const desc = 'Edward Chen is a second-year Immunology MMSc student at Harvard Medical School. He wonders whether there’s a biologically useful concept of “Hycean organisms”; humans, after all, are up to 60% water.';
    const image = "/SciQuel_1.png";

    return (
        <>
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

export default Article
