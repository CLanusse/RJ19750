import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import { UIContext } from '../../context/UIContext'
import { Loader } from '../Loader/Loader'

export const Checkout = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.apellido.length < 3) {
            alert("Apellido inválido")
            return
        }
        if (values.email.length < 3) {
            alert("Email inválido")
            return
        }
        if (values.tel.length < 7) {
            alert("Teléfono inválido")
            return
        }


        // generar el objeto orden
        const orden = {
            buyer: {
                ...values
            },
            items: carrito.map((el) => ({id: el.id, precio: el.price, cantidad: el.cantidad})),
            total: calcularTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        // enviar la orden a firestore
        const db = getFirestore()
        const orders = db.collection('orders')

        setLoading(true)
        orders.add(orden)
            .then((res) => {
                console.log(res.id)

                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue registrada!',
                    text: `Guarde su número de orden: ${res.id}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                  })

            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error inesperado',
                    text: `${err}`
                  })
            })
            .finally(() => {
                setLoading(false)
            })

        carrito.forEach((item) => {
            const docRef = db.collection('productos').doc(item.id)
            docRef.get() 
                .then((doc) => {
                        if (doc.data().stock >= item.cantidad) {
                            docRef.update({
                                stock: doc.data().stock - item.cantidad
                            })
                        } else {
                            alert("No hay stock de " + doc.data().name)
                        }
                    }
                )
        })
    }





    return (
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}

            <div>
                <h2>Complete sus datos</h2>
                <hr/>
                {/* listado de la compra */}
                <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        />
                    {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                        />
                    {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="tel"
                        placeholder="Teléfono"
                        name="tel"
                        value={values.tel}
                        onChange={handleInputChange}
                    />
                    {values.tel.length === 0 && <small>Este campo es obligatorio</small>}

                    <button className="btn btn-success" type="submit" disabled={loading}>Finalizar</button>
                </form>
            </div>
            </div>
        </>
    )
}
