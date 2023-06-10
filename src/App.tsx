import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from './Component/Header';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Myorder from './Pages/My order';
import Profile from './Pages/Profile';
import Blogs from './Pages/Blogs';
import { useSelector } from 'react-redux'
import { RootState } from './Redux/store';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/Pages/Dashboard' element={<ProtectedRoutes adminRoute={true} isAdmin={false}><Dashboard /></ProtectedRoutes>} />
          <Route path='/Pages/Login' element={<Login />} />
          <Route path='/Pages/Profile' element={<ProtectedRoutes adminRoute={false} isAdmin={false}><Profile /></ProtectedRoutes>} />
          <Route path='/Pages/My order' element={<ProtectedRoutes adminRoute={false} isAdmin={false}><Myorder /></ProtectedRoutes>} />
          <Route path='/Pages/Blogs' element={<ProtectedRoutes adminRoute={false} isAdmin={false}><Blogs /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
