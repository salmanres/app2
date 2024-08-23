import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import Sidebar from '../shared/Sidebar'
import LoginPage from '../auth/LoginPage';
import { Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {
  useEffect(() => {
    const offlineToastId = "offline-toast";

    const handleOnline = () => {
      toast.dismiss(offlineToastId);
      toast.success("You're back online!");
    };

    const handleOffline = () => {
      toast.error("You are offline!", {
        toastId: offlineToastId,
        autoClose: false,
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Fragment>
        <SearchBar />
        <ToastContainer />
    </Fragment>
  );
}

export default LandingPage;
