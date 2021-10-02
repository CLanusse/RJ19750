import React, { useEffect, useState } from 'react'


export const Clock = () => {

    const [time, setTime] = useState( new Date() )

    useEffect(() => {
        console.log("Me monté")

        return () => {
            console.log("Me desmonté")
        }

    }, [])

    useEffect( () => {
        
        setTimeout( () => {
            setTime( new Date())
        }, 1000)

    }, [time] )
    


    return (
        <div className="container">
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}
