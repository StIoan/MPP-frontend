import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Owner() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    },[])
    const loadUsers=async() => {
        const result=await axios.get("http:localhost:8080/owners")
        setUsers(result.data)
    }
    const deleteOwner = async (ownerId) => {
        await axios.delete(`https://13.48.127.50:8080/owners/${ownerId}`)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Height</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>{user.ownerId}</th>
                            <td>{user.name}</td>
                            <td>{user.addres}</td>
                            <td>{user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.description}</td>
                            <td>
                                {/* <button className='btn btn-primary mx-2'>View</button> */}
                                <Link className='btn btn-outline-dark mx-2'
                                    to={`/editOwner/${user.ownerId}`}>Edit</Link>
                                <button className='btn btn-danger mx-2'
                                    onClick={() => deleteOwner(user.ownerId)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}
