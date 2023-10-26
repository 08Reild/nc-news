import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function PostComment (){
    const { article_id } = useParams()
    const [username, setUsername] = useState("jessjelly")
    const [comment, setComment] = useState()

    const newComment = {
        body: comment,
        username: username
    }

    const submitComment = (e) => {
        e.preventDefault()
        axios.post(`https://northcoders-news-api-ekq5.onrender.com/api/articles/${article_id}/comments`, newComment)
        .then((result) => {console.log(result)})
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
          placeholder="Comment..."
          onChange={(e)=> {handleChange(e)}}/>
          <button type="submit">Submit Comment</button>
        </form>
        </>
    )
}

export default PostComment