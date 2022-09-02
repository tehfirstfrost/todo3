import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoContainer} from './components';
import { NotFound, Home } from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<TodoContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
