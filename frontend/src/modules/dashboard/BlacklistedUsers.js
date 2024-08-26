import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function BlacklistedUsers() {

    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const response = await axios.get(`${backendapi}/blacklisted`);
            setUserData(response.data);
            console.log(response.data); // Log the response data
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 pt-2 mb-5'>

                        <div className="card">
                            <div className="card-header text-center">
                                <b>BLACKLISTED USERS</b>
                            </div>
                            <ul className="list-group list-group-flush">
                                {userData.length > 0 ? (
                                    userData.map((data) => (
                                        <li className="list-group-item"  key={data._id}>
                                            <Link to={`../userdetails/${data._id}`} className='users-list'>
                                                <b>{data.fullname}</b><br />
                                                {data.email}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <div className='laoder'>
                                        LOADING
                                    </div>
                                )}
                            </ul>
                        </div>


                        {/* <h6 className='info-bar'>BLACKLISTED USERS</h6>
                        {userData.length > 0 ? (
                            userData.map((data) => (
                                <Link to={`../userdetails/${data._id}`} className='users-list border' key={data._id}>
                                    <b>{data.fullname}</b><br />
                                    {data.email}
                                </Link>
                            ))
                        ) : (
                            <div className='laoder'>
                                LOADING
                            </div>
                        )} */}
                        {/* <h6 className='info-bar'></h6> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlacklistedUsers