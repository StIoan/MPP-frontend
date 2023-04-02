import React from 'react'

export default function NavbarCountry() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">User</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/car">Car</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/country">Country</a>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-light">Add country</button>
        </div>
        </nav>
    </div>
  )
}
