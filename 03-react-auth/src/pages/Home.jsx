import { useState, useEffect } from 'react'
import { getAllItems } from '@/services/itemServices'

const Home = () => {
  // Estado para guardar los items que traiga de la API
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    // Traigo mis items de la API y los almaceno en el estado itemsData
    const fetchUserData = async () => {
      try {
        const result = await getAllItems()
        if (result.status === 200) {
          setItemsData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.title} />
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <a href='#' className='btn btn-primary'>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}
export default Home
