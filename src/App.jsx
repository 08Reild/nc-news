import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchbar'
import Header from './components/header'
import About from './components/about'
import Articles from './components/Articles'

import { Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <Routes>
<Route path="/" element={<Articles />} />
<Route path="/articles" element={<Articles />} />
</Routes>
    </>
  )
}

export default App

