import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Country() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        loadCountries()
    },[])
    const loadCountries=async() => {
        const result=await axios.get("http://localhost:8080/countries")
        setCountries(result.data)
    }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Population</th>
                        <th scope="col">Size</th>
                        <th scope="col">Language</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    countries.map((country, index) => (
                        <tr>
                            <th scope="row" key={index}>{country.countryId}</th>
                            <td>{country.name}</td>
                            <td>{country.population}</td>
                            <td>{country.size}</td>
                            <td>{country.language}</td>
                            <td>{country.description}</td>
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
