import { useContext, useState } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Animation from '../animacion/Animacion';
import Swal from 'sweetalert2';

export const UserAuthenticate = () => {
  const { login, signInWithGoogle } = useContext(UserAuthContext);

  // Estado de valores del form
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // Desestructuro para tomar los valores
  const { email, password } = values;

  const { push } = useHistory();

  // Función para detectar y modificar los cambios en los valores
  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Función para loguearse
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        push('/');
        Swal.fire('Good job!', 'You clicked the button!', 'success');
      })
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: '<a href="">Why do I have this issue?</a>',
        }),
      );
  };

  // Función para loguarse con google
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
    push('/');
  };

  return (
    <div
      className='container d-flex align-items-center justify-content-space'
      style={{ minHeight: '100vh' }}
    >
      <div className='row d-flex align-items-center justify-content-space'>
        <div className='col'>
          <Animation />
        </div>
        <div className='col' style={{ maxWidth: '500px' }}>
          <h2 className='text-center mb-4 font-weight-bold'>Log in 🛸</h2>
          <form className='p-0' onSubmit={handleSubmit}>
            <div className='form-group mb-2'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingrese su email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group mb-2'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Ingrese su password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
            >
              Log in
            </button>
          </form>
          <button
            type='submit'
            className='btn btn-secondary  font-weight-bold text-uppercase d-block w-100  mt-4'
            onClick={handleGoogle}
          >
            Log in with Google
          </button>
          <small className='text-center mt-3'>
            No tenes cuenta?
            <Link to='/signup'>Sign up</Link>
          </small>
        </div>
      </div>
    </div>
  );
};
