import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Country() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        loadCars()
    },[])
    const loadCars=async() => {
        const result=await axios.get("http://localhost:8080/cars")
        console.log(result.data)
        setCars(result.data)
    }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Miles</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cars.map((car, index) => (
                        <tr>
                            <th scope="row" key={index}>{car.carId}</th>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.price}</td>
                            <td>{car.miles}</td>
                            <td>{car.description}</td>
                            <td>
                                <button className='btn btn-outline-dark mx-2'>Edit</button>
                                <button className='btn btn-danger mx-2'>Delete</button>
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
