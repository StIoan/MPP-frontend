import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function AddOwner() {
  let navigate=useNavigate()
  const [owner, setOwner]=useState({
    name:"",
    addres:"",
    height:"",
    weight:"",
    description:""
  })
  const{name,addres,height,weight,description} = owner
  const onInputChange = (e) => {
    setOwner({...owner, [e.target.name]:e.target.value})
  }
  const onSubmit =async (e) => {
    e.preventDefault()
    await axios.post(`http:localhost:80/owners`, owner)
    navigate("/")
  }

  return <div className='container'>
    <div className='row'>
      <div className='border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Add Owner</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='Name' className='form-label'>Name</label>
          <input
            type={"text"}
            className="form-control"
            placeholder='Enter owner name'
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Address' className='form-label'>Address</label>
          <input
            type={"text"}
            className="form-control"
            placeholder='Enter owner address'
            name="addres"
            value={addres}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Height' className='form-label'>Height</label>
          <input
            type={"int"}
            className="form-control"
            placeholder='Enter owner height'
            name="height"
            value={height}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Weight' className='form-label'>Weight</label>
          <input
            type={"int"}
            className="form-control"
            placeholder='Enter owner weight'
            name="weight"
            value={weight}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Description' className='form-label'>Description</label>
          <input
            type={"text"}
            className="form-control"
            placeholder='Enter owner description'
            name="description"
            value={description}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type='submit' className='btn btn-outline-dark'>Submit</button>
        <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
        </form>
      </div>
    </div>
  </div>;
}
