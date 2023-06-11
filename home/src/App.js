import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'
import Contact from './routes/Contact'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import Intern from './components/User/Intern';
import Orientation from './components/about';
function App() {
  return (
    <div >
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/intern' element={<Intern/>}/>
          <Route path='/orientation' element={<Orientation/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
