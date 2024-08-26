import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarSimple from '../shared/NavbarSimple';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { backendapi } from '../../ServicePage';

function LoginPage() {
  const appNavigation = useNavigate();
  

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${backendapi}/login`, loginData);
      console.log("user logged in", response.data);
      alert("login successful");
      appNavigation(`/search/${response.data._id}`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("invalid email or password!");
      } else {
        console.log("error logging in", error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <div className='landing-page'>
        <NavbarSimple />
        <div className='container'>
          <div className='row justify-content-center mt-5'>
            <div className='col-lg-4 col-md-5 col-sm-6 col-11 text-center mt-5'>
              <form>
                <input type='text' className='form-control p-2' placeholder='MOBILE / EMAIL' autoFocus name='email' value={loginData.email} onChange={handleChange} />
                <input type='password' className='form-control mt-2 p-2' placeholder='PASSWORD' name='password' value={loginData.password} onChange={handleChange} />
                <label className='remember-me'><input type='checkbox' className='checkbox' /><span>remember me</span></label>
                <input type='button' className='btn btn-secondary mt-2 w-100 p-2' value={loading ? "LOADING..." : "LOGIN"} onClick={handleSubmit} disabled={loading} />
                <Link to="/admin" className='btn btn-outline-secondary mt-5 admin-button'>ADMIN LOGIN</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  )
}

export default LoginPage;
