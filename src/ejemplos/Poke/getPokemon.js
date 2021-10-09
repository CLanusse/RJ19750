


export const getPokemon = (query) => {
    return new Promise( (resolve, reject) => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then( (res) => res.json() )
            .then( (data) => {
                resolve({
                    id: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default
                })
            })
            .catch( err => {
                reject({
                    error: "Pokemon no encontrado"
                })
            })
    })
}