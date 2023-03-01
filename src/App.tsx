import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainroutes from './routes/mainroutes';

function App() {
  return (
    <BrowserRouter>
        <Mainroutes/>
    </BrowserRouter>
  );
}

export default App;
