import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarSimple from '../shared/NavbarSimple';

function VehicleDetails() {

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
                    <div className='col-lg-8 col-md-9 col-sm-10 col-12 mt-3'>
                        <div className="card mb-4">
                            <div className="card-header text-center">
                                <b>VEHICLE DETAILS</b>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>REG NO : </b>{vehData.registration}</li>
                                <li className="list-group-item"><b>NAME : </b>Rishabh jain</li>
                                <li className="list-group-item"><b>MAKE : </b>{vehData.vehicle}</li>
                                <li className="list-group-item"><b>STATE : </b>Uttarakhand</li>
                                <li className="list-group-item"><b>ENGINE : </b>HA11EVLHG82289</li>
                                <li className="list-group-item"><b>CHASSIS : </b>{vehData.chassis}</li>
                                <li className="list-group-item"><b>DUE STATUS : </b>8</li>
                                <li className="list-group-item"><b>DEFAULT STATUS : </b>RF</li>
                                <li className="list-group-item"><b>COLLECTION MANAGER : </b>rishabh kumar jain</li>
                                <li className="list-group-item pb-3"><b>CONTACT NUMBER : </b>1234567890</li>
                                <button className='btn btn-secondary w-100 no-border-radius p-2'>
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