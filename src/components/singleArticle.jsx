import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleArticle () {
const { article_id } = useParams()
const [article, setArticle] = useState([])
console.log(article_id)

useEffect(() => {
fetch(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}`)
.then((response) => response.json())
.then((body) => setArticle(body.article))
}, [article_id])
    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.article_img_url}></img>
            <p>Written by: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>{article.body}</p>
        </div>
    )
}

export default SingleArticle