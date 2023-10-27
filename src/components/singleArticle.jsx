import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dateFormat, { masks } from "dateformat";
import Comments from './comments'
import PostComment from './PostComment'

function SingleArticle () {
const { article_id } = useParams()
const [article, setArticle] = useState([])
const [articleVotes, updateArticleVotes] = useState(0)
const [showComments, setShowComments] = useState(false)

const addArticleVote = (num) => {
    updateArticleVotes((currentVote) => {
        return currentVote + num
    })
    axios.patch(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}`, { inc_votes: num })
    .then((response) => {})
    .catch((error) => { updateArticleVotes((currentVote) => {
        return currentVote - num
    })
})
}

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
            <p>Posted: {dateFormat(article.created_at, "ddd dd/mm/yy, h:MMTT")}</p>
            <p>{article.body}</p>
            <div className="articleVotes">
            <p>Votes: {(article.votes + articleVotes)}</p>
            <button disabled={articleVotes === 1} onClick={() => {addArticleVote(1)}}>+</button>
            <button disabled={articleVotes === -1} onClick={() => {addArticleVote(-1)}}>-</button>
            </div>
            <button onClick={() => {setShowComments((showComments) => !showComments)}}>Comments</button>
            {showComments ? <Comments/> : null}
        </div>
    )
}

export default SingleArticle