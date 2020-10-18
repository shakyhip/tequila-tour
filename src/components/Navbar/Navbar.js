import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHotel, faCircle } from '@fortawesome/free-solid-svg-icons';

import icon from '../../assets/img/tequila.png';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-color">
            <Link class="navbar-brand" to="/">
                <img src={icon} width="50" height="50" class="d-inline-block align-top" alt="icon" />
            </Link>
            <Link className="navbar-brand font-weight-light main-title-font" to="/">
                Tequila Tour
                <span class="sr-only">(current)</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink className="nav-item nav-link main-menu" to='/foodie'>
                            <span className="fa-stack fa-stack-menu">
                                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x stack-fix" />
                                <FontAwesomeIcon icon={faUtensils} className="fa-stack-1x stack-fix" />
                            </span>
                            Foodie
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-item nav-link main-menu" to='/hospedaje'>
                            <span className="fa-stack fa-stack-menu">
                                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x stack-fix" />
                                <FontAwesomeIcon icon={faHotel} className="fa-stack-1x stack-fix" />
                            </span>
                            Hospedaje
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
