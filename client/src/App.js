
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import ClaimForm from './components/claimform';
import Dashboard from './components/userdash';
import Contact from './components/contact';
import AdminDashboard from './components/admindash';
import TpaDashboard from './components/tpadash';
import HospitalSchedule from './components/soc';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to="/login" />}/>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/claimform' element={<ClaimForm />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/admindashboard' element={<AdminDashboard />}></Route>
        <Route path='/tpadashboard' element={<TpaDashboard />}></Route>
        <Route path= '/soc' element ={<HospitalSchedule/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
