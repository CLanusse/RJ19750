import { useRef, useContext } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Animation from '../animacion/Animacion';
import Swal from 'sweetalert2';

const Signup = () => {
  // Tomo referencia de los campos del input con el hook useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  const { signup } = useContext(UserAuthContext);

  const { push } = useHistory();

  // Función para loguearse
  const handleSubmit = (e) => {
    e.preventDefault();

    signup(
      emailRef.current.value,
      passwordRef.current.value,
      confPasswordRef.current.value,
    )
      .then((res) => {
        push('/');
        Swal.fire('Good job!', 'You clicked the button!', 'success');
      })
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        }),
      );
  };

  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='row d-flex align-items-center justify-content-space'>
        <div className='col' style={{ width: '500px' }}>
          <h2 className='text-center mb-4 font-weight-bold'>Sign up 🛸</h2>
          <form className='p-0' onSubmit={handleSubmit}>
            <div className='form-group mb-2'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingrese su email'
                name='email'
                ref={emailRef}
              />
            </div>
            <div className='form-group mb-2'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Ingrese su password'
                name='password'
                ref={passwordRef}
              />
            </div>
            <div className='form-group mb-2'>
              <label>Repetir password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Repita su password'
                name='password'
                ref={confPasswordRef}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
            >
              Sign up
            </button>
          </form>
          <small className='text-center mt-3'>
            Ya tenes cuenta?
            <Link to='/login'>Log in</Link>
          </small>
        </div>
      </div>
      <div className='col '>
        <Animation />
      </div>
    </div>
  );
};

export default Signup;
