import React from 'react';
import './app.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Intro } from './pages/Intro';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
