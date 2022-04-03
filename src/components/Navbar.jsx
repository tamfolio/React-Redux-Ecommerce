import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const state = useSelector((state) => state.handleCart)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 text-primary" to="/">DarkMan Store</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-primary" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary" to="/products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="buttons">
          <button className="btn">
              <NavLink to="/login" className='btn btn-outline-primary'>
                  <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className='btn btn-outline-primary ms-2'>
                  <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className='btn btn-outline-primary ms-2'>
                  <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
              </NavLink> 
          </button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar