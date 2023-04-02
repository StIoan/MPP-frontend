import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/">User</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/car">Car</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/country">Country</a>
                </li>
              </ul>
            </div>
            <Link className="btn btn-outline-light" to="/addOwner">Add user</Link>
        </div>
        </nav>
    </div>
  )
}
