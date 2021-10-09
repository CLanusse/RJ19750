import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then( res => {
                setItem( res.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=> {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div>
            {
                loading ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
