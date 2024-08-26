import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function LoginAdmin() {

const [loading, setLoading] = useState("false");




  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
            <form>
              <input type='text' className='form-control mt-5 p-2' placeholder='MOBILE / EMAIL' />
              <input type='password' className='form-control mt-3 p-2' placeholder='PASSWORD' />
              <Link to="adminpanel" className='btn btn-secondary w-100 mt-3 p-2' >LOGIN</Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default LoginAdmin