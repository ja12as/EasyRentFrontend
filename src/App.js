import React from 'react'
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { OffersPage } from './pages/OffersPage';
import { PromoteProperties } from './pages/PromoteProperties';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/signup"element={<SignUpPage/>}/>
        <Route path="/login"element={<LoginPage/>}/>
        <Route path="/offers"element={<OffersPage/>}/>
        <Route path="/properties" element = {<PromoteProperties/>}/>
      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App
