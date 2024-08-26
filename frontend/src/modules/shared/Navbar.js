import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import { CgBoy } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row navbar'>
                    <div className='col-lg-1 col-sm-2 col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-9 col-sm-8 col-4 text-center logo'>
                        <h6>VINAYAKA</h6>
                        <p className='logo2'>ASSOCIATES</p>
                    </div>
                    <div className='col-lg-1 col-sm-2 col-4 text-center'>
                        <div className="dropdown">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='profile-pic' data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/" className="dropdown-item">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar