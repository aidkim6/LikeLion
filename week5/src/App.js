import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Button from './components/Button.jsx'
import Write from './components/Write.jsx'
import Article from './components/Article.jsx'
import "../src/assets/style.scss"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Button/>}/>
      <Route path='/write' element= {<Write/>}/>
      <Route path='/article' element={<Article/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
