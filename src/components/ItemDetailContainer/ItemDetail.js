import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'




export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    const styles = {
        btnAgregar: isInCart(id) ? "btn btn-danger m-2" : "btn btn-success m-2",
        btnTerminar: `btn btn-success ${!isInCart(id) && "desactivado"}`
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>

            <div className={isInCart(id) && "desactivado"}>
                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                <button
                    disabled={cantidad === 0}
                    className={styles.btnAgregar}
                    onClick={handleAgregar}
                    >
                    Agregar
                </button>
            </div>

            <Link to="/cart" className={styles.btnTerminar}>Terminar mi compra</Link>
        

            {/* { isInCart(id) 
                ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <button
                            className="btn btn-success my-2"
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
            } */}

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
