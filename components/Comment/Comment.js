import {DiscussionEmbed} from "disqus-react"

const Comments = () => {
    const disqusShortname = "SciQuel"

    const disqusConfig = {
        url: "http://localhost:3000/posts/post",
        identifier:'123',
        title: "Comments"
    }

    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}

export default Comments;