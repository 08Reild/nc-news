function ArticleCard ({title, author, topic, date, votes, img, commentCount}) {
    return (
        <>
            <h2>{title}</h2>
            <img src={img}></img>
            <p>Written by: {author}</p>
            <p>Topic: {topic}</p>
            <p>Created: {date}</p>
            <p>Votes: {votes}</p>
            <p>Comments: {commentCount}</p>
        </>
    )
}

export default ArticleCard