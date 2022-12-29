import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Intro } from './pages/Intro';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
