import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchbar'
import Header from './components/header'
import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <Header></Header>
    <About></About>
    </>
  )
}

export default App
