import { songs } from "../data/songs"
import SongCard from "../components/SongCard"
import '../styles/music.css'

export default function Music() {
  return (
    <div className="musicMain">
        <div className="musicHero">
            <h1 className="headerText">My Music</h1>
        </div>
        <div className="musicList">
            {songs.map((song) => (
            <SongCard key={song.id} song={song} />
        ))}
        </div>
      
    </div>
  )
}
