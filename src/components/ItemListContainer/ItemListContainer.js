import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { pedirProductos } from '../../helpers/pedirProductos'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'

// query params
// const URL = 'https://www.google.com/search?q=coderhouse&limit=10'


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    
    const {loading, setLoading} = useContext(UIContext)

 
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {

                if (categoryId) {
                    setItems( res.filter( prod => prod.category === categoryId) )
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId, setLoading])

    // useEffect(async ()=> {
    //    // mock llamado a la API
    //     const res = await pedirProductos()
    //     console.log(res)
    // }, [])

    // render con operador ternario
    return (
        <section className="container my-5">
            {
                loading 
                    ? <Loader/>
                    : <ItemList productos={items}/>
            }
            
        </section>
    )
    
    // render con early return
    // if (loading) {
    //     return <h2>Cargando...</h2>
    // }

    // return (
    //     <section className="cointainer my-5">
    //         <ItemList productos={items}/>
    //     </section>
    // )

    // render inline con fragment

    // return (
    //     <section className="cointainer my-5">
    //         {loading && <h2>Cargando...</h2>}
    //         {!loading && <ItemList productos={items}/>}
    //     </section>
    // )


}


// export default HomeView