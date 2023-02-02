import { useSongContext } from '@/context/SongContext'

const SongDetails = () => {
  const context = useSongContext()

  return (
    context.selectedSong.title
      ? <div>
        <h1>{context.selectedSong.title}</h1>
        <h4>{context.selectedSong.artist}</h4>
        <h6>{context.selectedSong.year}</h6>
        </div>
      : <h1>Selecciona una canción</h1>

  )
}
export default SongDetails
