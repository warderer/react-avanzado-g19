import logo from '@/assets/react.svg'
import '@/assets/css/form.css'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '@/services/userServices'
import useForm from '@/hooks/useForm'

const Login = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await loginUser(data)
      console.log(result)
      if (result.status === 200) {
        // Guardar el token en localstorage del navegador
        window.localStorage.setItem('token', result.data.token)
        navigate('/')
      }
    } catch (error) {

    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2023</p>
      </form>
    </main>
  )
}
export default Login
