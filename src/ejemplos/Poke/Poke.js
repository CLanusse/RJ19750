import React, { useEffect, useState } from 'react'
import { getPokemon } from './getPokemon'

export const Poke = () => {

    const [pokemon, setPokemon] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [id, setId] = useState(1)

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSiguiente = () => {
        id < 1118 && setId(id + 1)
    }
    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (busqueda.length > 2) {
            getPokemon(busqueda)
                .then( res => {
                    setPokemon(res)
                    setId(res.id)
                })
        }
    }
    
    useEffect( () => {
        setPokemon(null)
        
        getPokemon(id)
            .then( res => {
                setPokemon(res)
            })
    }, [id])

    return (
        <div className="container my-5">
            <h2>Pokemon</h2>
            <hr/>
            {
                !pokemon ? <h3>Cargando...</h3> :
                <>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt={pokemon.nombre}/>
                </>
            }

            <button className="btn btn-primary" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>


            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    value={busqueda}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}
