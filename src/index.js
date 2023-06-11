import React from 'react';
import { ColorModeScript,ChakraProvider, theme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ColorModeSwitcher  from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    </React.StrictMode>
);


