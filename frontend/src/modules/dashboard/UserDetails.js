import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdArrowRoundBack } from "react-icons/io";


function UserDetails() {
  const pageNavigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const response = await axios(`http://localhost:3500/userdata/${id}`);
    setUserData(response.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  const blacklistUser = async () => {

    const url = userData.blacklisted
      ? `http://localhost:3500/unblock/${id}`
      : `http://localhost:3500/blacklist/${id}`;

    const response = await axios.put(url);
    setUserData(response.data);
    toast.success(`user ${userData.blacklisted ? 'unblocked!' : 'blackisted!'}`);
    getUserData();
  }


  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className="card mt-4 mb-4">
              <button className='btn back-btn' onClick={() => pageNavigate(-1)}>
                <IoMdArrowRoundBack />
              </button>
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="card-img-top card-img1" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">{userData.fullname}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Mobile: </b>8954955232</li>
                <li className="list-group-item"><b>Email: </b>{userData.email}</li>
                <li className="list-group-item"><b>State: </b>uttar pradesh</li>
                <li className="list-group-item"><b>City: </b>BUDAUN</li>
                <li className="list-group-item"><b>PIN: </b>123455</li>
                <li className="list-group-item"><b>Address: </b>moh narayanganj ujhani main road</li>
                <li className="list-group-item"><b>Created At: </b>12/12/2024</li>
                <li className="list-group-item pb-3"><b>Subscription: </b>23 days</li>
                {/* <li className="list-group-item text-center">*****</li> */}
                <li className="list-group-item p-0">
                  <button onClick={blacklistUser} className='btn btn-secondary w-100 p-2 no-border-radius'>
                    {userData.blacklisted ? 'UNBLOCK USER' : 'BLACKLIST USER'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  )
}

export default UserDetails