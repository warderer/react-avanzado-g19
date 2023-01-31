import { useEffect, useState } from 'react'

import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const FormHook = () => {
  // Paso #1: Crear un único estado con toda la información en forma de objeto
  const [datos, setDatos] = useState({
    email: '',
    password: '',
    nombre: ''
  })

  // Paso #2 Voy simular traer datos de la API
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Dr. Strange',
        email: 'drstrange@marvel.com',
        password: 'multiverso'
      }
      setDatos(info)
    }, 5000)
  }, [])

  const sendData = (data) => {
    console.log(data)
  }

  // Paso #3 Uso de mi custom hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' height='100px' width='100px' />

        <form>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='John Doe'
            value={input.nombre}
            onChange={handleInputChange}
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='correo@mail.com'
            value={input.email}
            onChange={handleInputChange}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='********'
            value={input.password}
            onChange={handleInputChange}
          />

          <button onClick={handleSubmit}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  )
}
export default FormHook
