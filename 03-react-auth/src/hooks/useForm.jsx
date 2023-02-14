// Reglas para crear un custom hook
// Custom Hook es una función que utiliza otros hooks de react
// 1. El nombre de la función debe comenzar con la palabra use}
// 2. Siempre deben de ser funciones (a partir de React 16.8 usamos hooks)
// 3. Siempre deben usar al menos un Hook de React (useState, useEffect, useContext, etc).
// 4. No deben ser llamados dentro de ciclos, condiciones o funciones anidadas.
// 5. Deben ser reutilizables, no para casos muy especificos.
// 6. Debe retornar algo, ya sea un valor, un objeto, un array, etc.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formularo en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  },
  [])

  // Funcion que se ejecuta cada vez que se escribe en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
