import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateOwner() {
  let navigate=useNavigate()
  const {ownerId} = useParams()
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
  useEffect(() => {
    loadOwner()
  },[])
  const onSubmit =async (e) => {
    e.preventDefault()
    await axios.put(`api/owners/${ownerId}`, owner)
    navigate("/")
  }
  const loadOwner = async () => {
    const result = await axios.get(`api/owners/${ownerId}`)
    setOwner(result.data)
  }
  window.onload = loadOwner()

  return <div className='container'>
    <div className='row'>
      <div className='col-md-6 offsert-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Edit Owner</h2>
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
            type={"text"}
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
            type={"text"}
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
