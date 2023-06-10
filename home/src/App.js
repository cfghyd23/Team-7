import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'
import Contact from './routes/Contact'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
function App() {
  return (
    <div >
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
