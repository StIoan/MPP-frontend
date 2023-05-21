import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
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
            <Link className="btn btn-outline-light mx-3" to="/addOwner">Add user</Link>
            <Link className="btn btn-outline-light mx-3" to="/filterOwner">Filter user</Link>
            <Link className="btn btn-outline-light mx-3" to="/sortOwnerHeight">Sort user</Link>
        </div>
        </nav>
    </div>
  )
}
