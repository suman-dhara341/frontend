import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import Browse from './Browse'
import MovieDialog from './components/MovieDialog'




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </BrowserRouter>
      <MovieDialog />
      <Toaster />
    </>
  )
}

export default App