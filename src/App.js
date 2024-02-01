import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Fragment } from 'react';
import './App.css';
import { Login } from './components/modules/login';
import { VirtualClass } from './components/modules/virtualClass';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route path='/virtualClass' element={<VirtualClass/>}/>
          <Route path='/registerUser'/>
          <Route path="/" element={<Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
