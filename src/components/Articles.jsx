import {useState, useEffect} from 'react'
import ArticleCard from './articleCard'
import { Link } from 'react-router-dom'
import dateFormat, { masks } from "dateformat";

function Articles () {
const [selectedTopic, setSelectedTopic] = useState(null)
const [articles, setArticles] = useState([])

useEffect(() => {
fetch("https://northcoders-news-api-ekq5.onrender.com/api/articles")
.then((response) => response.json())
.then((body) => setArticles(body.articles))
}, [])

const filteredArticles = selectedTopic ? articles.filter(article => article.topic === selectedTopic) : articles;

    return (
        <div>
        <ul>
            <button onClick={()=>{setSelectedTopic('coding')}}>Coding</button>
            <button onClick={()=>{setSelectedTopic('football')}}>Football</button>
            <button onClick={()=>{setSelectedTopic('cooking')}}>Cooking</button>
            {filteredArticles.map((article) => {
            return (
                <li key={article.article_id} className ="article_cards">
                <Link to={`/articles/${article.article_id}`}>
                <ArticleCard 
                title={article.title} 
                author={article.author} 
                topic={article.topic} 
                date={dateFormat(article.created_at, "ddd dd mmm yy")} 
                votes={article.votes} 
                img={article.article_img_url} 
                commentCount={article.comment_count} 
                />
                </Link>
                </li>
            )
            })}
        </ul>
        </div>
    )
}

export default Articles