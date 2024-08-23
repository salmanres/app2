import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import NavbarSimple from '../shared/NavbarSimple'
import LoginAdmin from '../auth/LoginAdmin'
import AdminComponent from './AdminComponent'
import { Outlet } from 'react-router-dom'

function AdminPanel() {
    return (
        <Fragment>
            <div className='landing-page'>
                <NavbarSimple />
                <div className='container'>
                    <div className='row justify-content-center mt-2'>
                        <div className='col-lg-5 col-md-6 col-sm-7 col-12 mt-5'>
                            <Outlet>
                            </Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPanel