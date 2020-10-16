import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/img/tequila.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-color">
            <Link class="navbar-brand" to="/">
                <img src={icon} width="50" height="50" class="d-inline-block align-top" alt="icon" />
            </Link>
            <Link className="navbar-brand font-weight-light main-title-font" to="/">Tequila Tour</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <NavLink className="nav-item nav-link main-menu" to='/foodie'>Foodie</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-item nav-link main-menu" to='/hospedaje'>Hospedaje</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
