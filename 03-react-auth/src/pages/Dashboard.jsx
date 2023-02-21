import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { getSingleUser } from '@/services/userServices'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        console.log('result: ', result)
        console.log('user', user)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ', error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {
        user?.role === 'ADMIN' ? <h2>Hola Admin</h2> : <h2>Hola Customer</h2>
      }
      {
        user?.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
      }
      {
        user?.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
      }
      {
        userData?.first_name && <p className='first_name'> First Name: {userData.first_name}</p>
      }
      {
        userData?.last_name && <p className='last_name'> Last Name: {userData.last_name}</p>
      }
      {
        userData?.gender && <p className='gender'> Gender: {userData.gender}</p>
      }
      {
        userData?.email && <p className='email'> Email: {userData.email}</p>
      }
    </div>

  )
}
export default Dashboard
