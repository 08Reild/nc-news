import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Comments () {
    const { article_id } = useParams()
    console.log(article_id)
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => response.json())
        .then((body) => setComments(body.comments))
        }, [article_id])
    return (
        <>
        {comments.map((comment) => {
            return (
            <div key={comment.comment_id} className="commentCard">
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>User: {comment.author}</p>
            <p>Posted: {comment.created_at}</p>
            </div>
            )
        })}
        </>
    )
}

export default Comments