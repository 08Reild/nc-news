function PostComment (){
    return (
        <>
        <form action="/search" method="post">
            <input 
          type="text"
          placeholder="UserName"/>
        </form>
        <form action="/search" method="post">
            <input 
          type="text"
          placeholder="Comment..."/>
        </form>
        <button>Submit Comment</button>
        </>
    )
}

export default PostComment