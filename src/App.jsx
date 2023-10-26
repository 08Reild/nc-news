import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchbar'
import Header from './components/header'
import Articles from './components/Articles'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/singleArticle'
import Comments from './components/comments'
import PostComment from './components/PostComment'

function App() {
  return (
    <>
    <Header />
    <NavBar />
    <SearchBar />
    <Routes>
<Route path="/" element={<Articles />} />
<Route path="/articles" element={<Articles />} />
<Route path="/articles/:article_id" element={<div><SingleArticle/><PostComment/><Comments/></div>} />
<Route path="/*" element={<p>Page Not Found</p>}/>
</Routes>
    </>
  )
}

// <Route path="/articles/:article_id/comments" element={<div><SingleArticle/><Comments/></div>} />

export default App

