import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Lado Izquierdo</h2>
          <SongList />
        </div>

        <div className='derecho'>
          <h2>Lado Derecho</h2>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}
export default Home
