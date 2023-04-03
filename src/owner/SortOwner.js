import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SortOwner() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    },[])
    const loadUsers=async() => {
        const result=await axios.get(`http:localhost:80/owners`)
        setUsers(result.data)
        setUsers(users.sort((a, b) => {
            return a.height - b.height;
        }))
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
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}
