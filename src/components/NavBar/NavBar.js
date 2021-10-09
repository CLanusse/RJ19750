import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import './NavBar.scss'




export const NavBar = ( {logo} ) => {


    return (
        <header className="header">
            <h1>{logo}</h1>

            <div>
                <nav>
                    <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/remeras">Remeras</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/zapatos">Zapatos</NavLink>

                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>

                    <Link to="/cart"><CartWidget/></Link>
                    
                </nav>
            </div>
        </header>
    )
}

