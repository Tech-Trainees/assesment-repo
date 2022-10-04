import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Yaswanth from './Yashblog/Yaswanth';
import SukumarBlog from './components/sukumarBlog';
import Body from './components/body';
import Kishore from './Kishore';
import BlogPrem from './component/blogPrem';
import HarshitApp from './components/HarshitApp';
import Name from './Blogs/header copy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yaswanth" element={<Yaswanth/>} />
        <Route path="/krish" element={<Kishore />} />
        <Route path='/sukumar' element={<SukumarBlog />} />
        <Route path="/naidu" element={<Body />} />
        <Route path="/prem-blog" element={<BlogPrem />} />
        <Route path="/harshit" element={<HarshitApp />} />
        <Route path='/Nagesh' element={<Name/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
