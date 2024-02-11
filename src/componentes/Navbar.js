import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <header className=" d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link Link to="/" className=" elproblema d-inline-flex link-body-emphasis text-decoration-none">
              <img className="logito" width="90" height="60" src="../3.png" aria-label="Bootstrap"></img>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><button type="button" className="btn btn-primary me-2"><Link to="/">Inicio</Link></button></li>
            {/* <li><Link to="/" className="nav-link px-2 link-secondary">Inicio</Link></li> */}
            <li><button type="button" className="btn btn-primary me-2"><Link to="/properties">Promover Propiedades</Link></button></li>
            <li><button type="button" className="btn btn-primary me-2"><Link to="/offers">Ofertas</Link></button></li>
            {/* <li><Link to="/properties" className="nav-link px-2">Promover Propiedades</Link></li>
            <li><Link to="/offers" className="nav-link px-2">Ofertas</Link></li> */}
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-primary me-2"><Link to="/login">Iniciar Sesion</Link></button>
            <button type="button" className="btn btn-primary"><Link to="/signup">Registrarse</Link></button>
          </div>
        </header>
      </div> 
  </>
  )
}
