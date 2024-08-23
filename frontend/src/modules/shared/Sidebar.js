import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import { backendapi } from '../../ServicePage';

function Sidebar() {

  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const response = await axios.get(`${backendapi}/userdata/${id}`);
    console.log(response.data);
    setUserData(response.data);
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <Fragment>
      <FiMenu className='menu-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />

      <div className="offcanvas offcanvas-start custom-offcanvas" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <button type="button" className="btn-close offcanvas-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{userData.fullname}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>MOBILE : </b>8954955232</li>
            <li className="list-group-item"><b>EMAIL : </b>{userData.email}</li>
            <li className="list-group-item"><b>STATE : </b>uttar pradesh</li>
            <li className="list-group-item"><b>CITY : </b>BUDAUN</li>
            <li className="list-group-item"><b>PIN : </b>123455</li>
            <li className="list-group-item"><b>ADDRESS : </b>moh narayanganj ujhani main road</li>
            <li className="list-group-item"><b>DATE CREATED : </b>12/12/2024</li>
            <li className="list-group-item pb-3"><b>SUB ENDS IN : </b>23 days</li>
            <li className="list-group-item p-0">
              <button className='btn btn-secondary w-100 no-border-radius'>
                CHANGE PASSWORD
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
