import React from 'react'
import { useHistory } from 'react-router'




export const ItemDetail = ({ id, name, price, img, description, category} ) => {

    const {goBack, push} = useHistory()


    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
            {/* opción de compra / contador */}

            <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}
