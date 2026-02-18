import { useState } from "react"
import '../styles/songcard.css'

export default function SongCard({ song }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="song-card">
      <div className="song-image">
        <img src={song.cover} alt={song.title} />

        <div className="overlay" onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}

          {playing && (
            <iframe
                src={`https://open.spotify.com/embed/track/${song.id}`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
            />
            )}
        </div>
      </div>

      <div className="song-content">
        <h2>{song.title}</h2>

        <div className="platform-buttons">
          <a href={song.spotifyUrl} target="_blank">Spotify</a>
          <a href={song.appleUrl}>Apple Music</a>
          <a href={song.youtubeUrl}>YouTube Music</a>
          <a href={song.deezerUrl}>Deezer</a>
          <a href={song.youtubeUrl}>Itunes</a>
        </div>
      </div>
    </div>
  )
}
