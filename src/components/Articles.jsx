import {useState, useEffect} from 'react'
import ArticleCard from './articleCard'

function Articles () {
// const [isLoading, setIsLoading] = useState(true)
const [articles, setArticles] = useState([])
// const [error, setError] = useState(null)

useEffect(() => {
fetch("https://northcoders-news-api-ekq5.onrender.com/api/articles")
.then((response) => response.json())
.then((body) => setArticles(body.articles))
}, [])

    return (
        <div>
        <ul>
            {articles.map((article) => {
            return (
                <ArticleCard id={article.article_id}title={article.title} author={article.author} topic={article.topic} date={article.created_at} votes={article.votes} img={article.article_img_url} commentCount={article.comment_count}></ArticleCard>
            )
            })}
        </ul>
        </div>
    )
}

export default Articles