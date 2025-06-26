import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'
import Header from './components/Header';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  )
}

export default App
