import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserCheck } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { IoDocumentLock } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AdminComponent() {

    const [vehicleData, setVehicleData] = useState([]);
    // const [adminData, setAdminData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3500/");
            console.log(response.data.length);
            setVehicleData(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3'>
                        <p className='text-secondary mb-0'>TOTAL RECORDS : <b>{vehicleData.length}</b></p>
                        <p className='text-secondary mt-0 mb-0'>SUBSCRIPTION : <b>20 DAYS</b></p>
                    </div>
                </div>
                <div className='row justify-content-between px-3 mt-2'>
                    <div className='border admin-box'>
                        <FaUserCheck className='btn-icon' />
                        <Link to="../activeusers" className='admin-box-link'> ACTIVE USERS</Link>
                    </div>
                    <div className='border admin-box'>
                        <FaUserSlash className='btn-icon' />
                        <Link to="../blacklisted" className='admin-box-link'> BLACKLISTED USERS</Link>
                    </div>


                    <div className=' border admin-box'>
                        <FaUserPlus className='btn-icon' />
                        <Link to="../addnew" className='admin-box-link'> ADD NEW USER</Link>
                    </div>
                    <div className='border admin-box'>
                        <IoDocumentLock className='btn-icon' />
                        <Link to="../addrecord" className='admin-box-link'> ADD NEW RECORD</Link>
                    </div>

                    <div className='border admin-box'>
                        <AiFillProfile className='btn-icon' />
                        <Link to={`../adminprofile/:1234`} className='admin-box-link'> MY PROFILE</Link>
                    </div>
                    <div className='border admin-box'>
                        <FaMoneyBillWave className='btn-icon' />
                        <Link to="../billing" className='admin-box-link'> MY BILLING</Link>
                    </div>
                    <div className='border admin-box'>
                        <FaCarAlt className='btn-icon' />
                        <Link to="../confirmed" className='admin-box-link'>CONFIRMED VEHICLES</Link>
                    </div>
                    <div className='border admin-box'>
                        <IoLogOut className='btn-icon' />
                        <Link to="/" className='admin-box-link'>LOGOUT</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminComponent