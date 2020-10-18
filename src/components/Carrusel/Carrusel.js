import React from 'react';
import './Carrusel.css'
import ban1 from '../../assets/img/banners/banner1.jpg'
import ban2 from '../../assets/img/banners/banner2.jpg'
import ban3 from '../../assets/img/banners/banner3.jpg'

const Carrusel = () => {
    return (
        <div className="container py-6 ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ban1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ban2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ban3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>
        </div>
    )
}

export default Carrusel
