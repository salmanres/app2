import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import NavbarSimple from '../shared/NavbarSimple'
import { Outlet } from 'react-router-dom'

function MainPage() {
    return (
        <Fragment>
            <div className='landing-page'>
                <Outlet>
                </Outlet>
            </div>
        </Fragment>
    )
}

export default MainPage