import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Votes from './CommentVotes'
import PostComment from './PostComment';
import dateFormat from "dateformat";

function Comments () {
    const { article_id } = useParams()
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    useEffect(() => {
        fetch(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => response.json())
        .then((body) => setComments(body.comments))
        }, [article_id])
    return (
        <>
        <PostComment setComments={setComments}/>
        {comments.map((comment) => {
            return (
            <div key={comment.comment_id} className="commentCard">
            <p>Comment: {comment.body}</p>
            <p>User: {comment.author}</p>
            <p>Posted: {dateFormat(comment.created_at, "dd/mm/yy HH:mmtt")}</p>
            <p>Votes: {comment.votes + votes}</p>
            <Votes/>
            </div>
            )
        })}
        </>
    )
}

export default Comments