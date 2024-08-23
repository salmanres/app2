import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './modules/dashboard/LandingPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegPage from './modules/auth/RegPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./global/Style.css";
import LoginPage from './modules/auth/LoginPage';
import MainPage from './modules/dashboard/MainPage.js';
import AdminPanel from './modules/dashboard/AdminPanel.js';
import ActiveUsers from './modules/dashboard/ActiveUsers.js';
import AdminComponent from './modules/dashboard/AdminComponent.js';
import UserDetails from './modules/dashboard/UserDetails.js';
import LoginAdmin from './modules/auth/LoginAdmin.js';
import BlacklistedUsers from './modules/dashboard/BlacklistedUsers.js';
import AddNewRecord from './modules/dashboard/AddNewRecord.js';
import VehicleDetails from './modules/dashboard/VehicleDetails.js';
import AdminProfile from './modules/dashboard/AdminProfile.js';
import Billing from './modules/dashboard/Billing.js';
import ConfirmedVehicles from './modules/dashboard/ConfirmedVehicles.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='' element={<LoginPage />} />
          <Route path='search/:id' element={<LandingPage />} />
          <Route path='vehdetails/:id' element={<VehicleDetails/>}/> 
        </Route>
        <Route path="admin" element={<AdminPanel />}>
          <Route path='' element={<LoginAdmin />} />
          <Route path='adminpanel' element={<AdminComponent />} />
          <Route path='activeusers' element={<ActiveUsers />} />
          <Route path='userdetails/:id' element={<UserDetails />} />
          <Route path='addnew' element={<RegPage />} />
          <Route path='blacklisted' element={<BlacklistedUsers />} />
          <Route path='addrecord' element={<AddNewRecord />} />
          <Route path='adminprofile/:id' element={<AdminProfile />} />
          <Route path='billing' element={<Billing />} />
          <Route path='confirmed' element={<ConfirmedVehicles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
