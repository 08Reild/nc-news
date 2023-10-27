import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchbar'
import Header from './components/header'
import Articles from './components/Articles'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/singleArticle'

function App() {
  return (
    <>
    <Header />
    <NavBar />
    <Routes>
<Route path="/" element={<Articles />} />
<Route path="/articles" element={<Articles />} />
<Route path="/articles/:article_id" element={<div><SingleArticle/></div>} />
<Route path="/*" element={<p>Page Not Found</p>}/>
</Routes>
    </>
  )
}

export default App

