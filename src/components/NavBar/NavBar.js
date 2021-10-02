import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'

export const NavBar = ( {logo} ) => {


    return (
        <header className="header">
            <h1>{logo}</h1>

            <div>
                <nav>
                    <p>Enlace 1</p>
                    <p>Enlace 2</p>
                    <p>Enlace 3</p>
                </nav>

                <CartWidget/>
            </div>
        </header>
    )
}

