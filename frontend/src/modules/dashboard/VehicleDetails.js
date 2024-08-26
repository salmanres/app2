import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarSimple from '../shared/NavbarSimple';
import { IoMdArrowRoundBack } from "react-icons/io";

function VehicleDetails() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [vehData, setVehData] = useState([]);

    const getvehData = async () => {
        const response = await axios.get(`http://localhost:3500/vehdetails/${id}`);
        console.log(response.data);
        setVehData(response.data);
    }

    useEffect(() => {
        getvehData();
    }, []);

    return (
        <Fragment>
            <NavbarSimple />
            <div className='container'>
                <div className='row mt-5 justify-content-center'>
                    <div className='col-lg-8 col-md-9 col-sm-10 col-12'>
                        <div className="card mb-4">
                            <button className='btn back-btn' onClick={() => navigate(-1)}>
                                <IoMdArrowRoundBack />
                            </button>

                            <div className="card-header text-center d-flex align-items-center">
                                <b>VEHICLE DETAILS</b>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Reg: </b>{vehData.registration}</li>
                                <li className="list-group-item"><b>Name: </b>Rishabh jain</li>
                                <li className="list-group-item"><b>Make: </b>{vehData.vehicle}</li>
                                <li className="list-group-item"><b>State: </b>Uttarakhand</li>
                                <li className="list-group-item"><b>Engine: </b>HA11EVLHG82289</li>
                                <li className="list-group-item"><b>Chassis: </b>{vehData.chassis}</li>
                                <li className="list-group-item"><b>DS: </b>8</li>
                                <li className="list-group-item"><b>DS2: </b>RF</li>
                                <li className="list-group-item"><b>CM: </b>rishabh kumar jain</li>
                                <li className="list-group-item pb-3"><b>Contact: </b>1234567890</li>
                                <button className='btn btn-secondary no-border-radius p-2'>
                                    CONFIRM VEHICLE
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default VehicleDetails