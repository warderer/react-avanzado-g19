import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  // Estoy autenticado o no?
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null) // info usuario

  const login = (token) => {
    // Guardar el token en localstorage del navegador
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    // Descodifica el token
    setUser(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setIsAuth(false)
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      // obtener la info usuario, ocupamos descodificar el token jwt
      const decoded = jwt_decode(token)
      setIsAuth(true)
      setUser(decoded)
    }
  }, [])

  const values = {
    isAuth,
    user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
