import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Dashboard from './components/dashboard';

function App() {
    return (
        <div className='main-wrapper'>
            <BrowserRouter>
                <h1>Check In / Out</h1>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
                <AuthenticationButton />
            </BrowserRouter>
        </div>
    );
}

export default App;