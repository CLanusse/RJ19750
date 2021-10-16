import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'




export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const addToCart = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }

        console.log( "agregado: ", newItem)
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
            {/* opción de compra / contador */}

            <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>

            <button
                className="btn btn-success my-2"
                onClick={addToCart}
            >
                Agregar
            </button>

            <hr/>
            <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button 
                className="btn btn-outline-primary mx-4"
                onClick={() => push("/")}
            >
                Volver al inicio
            </button>
        </div>
    )
}
