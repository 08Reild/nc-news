import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import dateFormat, { masks } from "dateformat";

function PostComment ({setComments}){
    const { article_id } = useParams()
    const [username, setUsername] = useState("grumpy19")
    const [comment, setComment] = useState()
    const [error, setError] = useState(null)

    const newComment = {
        body: comment,
        username: username
    }

    const optimisticComment = {
        comment_id: 99,
        body: comment,
        author: username,
        created_at: Date.now(),
        votes: 0
    }

    const submitComment = (e) => {
        e.preventDefault()
        if(comment.length > 0) {
        setComment("")
        setComments((Comments) => [optimisticComment, ...Comments])
        axios.post(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}/comments`, newComment)
        .then(() => {setError("")})
        .catch(() => {setError("Comment not submitted, please try again."); setComments((comments) => { return comments.slice(1)});})
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setComment(e.target.value)
    }

    return (
        <>
        <form onSubmit={submitComment} method="post">
            <input 
          type="text"
          value={comment}
          placeholder="Comment..."
          onChange={(e)=> {handleChange(e)}}/>
          <button type="submit">Submit Comment</button>
        </form>
        <p>{error}</p>
        </>
    )
}

export default PostComment