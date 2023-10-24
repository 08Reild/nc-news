function ArticleCard ({id, title, author, topic, date, votes, img, commentCount}) {
    return (
        <li id="article_card">
            <h2>{title}</h2>
            <img src={img}></img>
            <p>Written by: {author}</p>
            <p>Topic: {topic}</p>
            <p>Created: {date}</p>
            <p>Votes: {votes}</p>
            <p>Comments: {commentCount}</p>
            <p>Article id: {id}</p>
        </li>
    )
}

export default ArticleCard