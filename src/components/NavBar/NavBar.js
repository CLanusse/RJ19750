import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = ( {logo} ) => {


    return (
        <header>
            <h1>{logo}</h1>

            <nav>
                <p>Enlace 1</p>
                <p>Enlace 2</p>
                <p>Enlace 3</p>
            </nav>

            <CartWidget/>
        </header>
    )
}

