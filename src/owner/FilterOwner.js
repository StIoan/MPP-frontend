import React from 'react'
import { Link } from 'react-router-dom'

export default function FilterOwner() {

  return <div className='container'>
    <div className='row'>
      <div className='col-md-6 offsert-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Filter Owner</h2>
        <div className='mb-3'>
          <label htmlFor='Name' className='form-label'>Height</label>
          <input
            type={"text"}
            className="form-control"
            placeholder='The minimum height'
            name="height"
            value={height}
            // onChange={(e) => onInputChange(e)}
          />
        </div>
        <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
      </div>
    </div>
  </div>;
}
