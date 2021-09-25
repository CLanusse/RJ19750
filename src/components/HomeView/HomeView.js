import React from 'react'


export const HomeView = ( {titulo, contenido, otraProp} ) => {

    // console.log(props.titulo)
    // console.log(props.contenido)

    // const {titulo, contenido} = props

    console.log(otraProp)

    return (
        <section>
            <h1>{titulo}</h1>
            <hr/>
            <p>{contenido}</p>        
            <p>{otraProp}</p>        

        </section>
    )
}


// export default HomeView