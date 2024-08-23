import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import NavbarSimple from '../shared/NavbarSimple';
import { backendapi } from '../../ServicePage';

function RegPage() {

  const appNaviagtion = useNavigate();

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${backendapi}/register`, userData);
      console.log("User registered:", response.data);
      toast.success("registration Successful! redirecting to admin panel...");
      setTimeout(() => {
        appNaviagtion("../adminpanel");
      }, 4000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Email already registered");
      } else {
        console.error("Error registering user:", error);
        toast.error("Registration failed");
      }
    }
  };

  return (
    <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
              <form>
                <h5 className='text-secondary text-center mt-2'>ADD NEW USER</h5>
                <input type='text' className='form-control p-2 mt-2' placeholder='Full Name' name='fullname' value={userData.fullname} onChange={handleChange} />
                <input type='text' className='form-control p-2 mt-2' placeholder='Email' name='email' value={userData.email} onChange={handleChange} />
                <input type='password' className='form-control p-2 mt-2' placeholder='Password' name='password' value={userData.password} onChange={handleChange} />
                <button type="button" className='btn btn-secondary w-100 mt-2 p-2' onClick={handleSubmit}>ADD USER</button>
              </form>
            </div>
          </div>
        </div>
      <ToastContainer />
    </Fragment>
  );
}

export default RegPage;
