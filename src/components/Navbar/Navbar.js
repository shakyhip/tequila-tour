import React from 'react'
import './Navbar.css'
import NavLiga from '../NavLiga/NavLiga';
import { Link } from 'react-router-dom';
import { faUtensils, faHotel, faIndustry, faClipboardList } from '@fortawesome/free-solid-svg-icons';

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
                    <NavLiga titulo="Foodie" toLink="/foodie" icon={faUtensils} />
                    <NavLiga titulo="Hospedaje" toLink="/hospedaje" icon={faHotel} />
                    <NavLiga titulo="Fabricas" toLink="/fabricas" icon={faIndustry} />
                    <NavLiga titulo="Actividades" toLink="/actividades" icon={faClipboardList} />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
