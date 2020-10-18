import React from 'react';
import './NavLiga.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const NavLiga = (props) => {
    const {titulo, toLink, icon } = props;
    return (
        <li class="nav-item">
            <NavLink className="nav-item nav-link main-menu" to={toLink}>
                <span className="fa-stack fa-stack-menu">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x stack-fix" />
                    <FontAwesomeIcon icon={icon} className="fa-stack-1x stack-fix" />
                </span>
                {titulo}
            </NavLink>
        </li>
    )
}

export default NavLiga
