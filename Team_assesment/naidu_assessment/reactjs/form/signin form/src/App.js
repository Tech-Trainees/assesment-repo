import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './login';
import Success from './success';
   function App(){
    return(
      <Router>
                    <Routes>
                        <Route path="/" element={<Login 
                        />} />
                         <Route path="/dashboard" element={<Success 
                        />} />
                    </Routes>
                </Router>
    )
   }
   export default App;