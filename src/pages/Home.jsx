import '../styles/home.css'

import BroodImg from "../assets/broodImg.jpg"
import AboutImg from "../assets/aboutImage.jpeg"
import Youtube from "react-lite-youtube-embed"

export default function Home() {
  return (
    <>
    <div className="HomeMain">
        {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>The Furious Worshipper</h1>
          <p>Worship | Spirit | Ministry</p>
        </div>
      </div>

      {/* LATEST MUSIC */}
      <div className="latestMusic">
        <div className="latestMusic-content">
          <h2 className="sectionTitle">Latest Music</h2>
          <h1 className="songTitle">Brood (feat. Pst. Soji Pitan)</h1>

          <p className="sectionDescription">
            Brood is more than a song; it is a prayer, a cry, and an invitation
            for the Holy Spirit to move afresh.
          </p>

          <div className="listening-buttons">
            <button className="playButton">Spotify</button>
            <button className="listenButton">Apple Music</button>
            <button className="playButton">YouTube Music</button>
            <button className="listenButton">Deezer</button>
            <button className="playButton">iTunes</button>
          </div>

          <p className="moreMusic">More Music</p>
        </div>

        <div className="broodImg">
          <img src={BroodImg} alt="Brood EP cover" />
        </div>
      </div>

      {/* LATEST VIDEO */}
      <div className="latestVideo">
      <iframe width="100%" height="600px" src="https://www.youtube.com/embed/g83wpxSGrIo?si=6CbqCHuFgbI8EQzu" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
      </div>

      {/* ABOUT */}
      <div className="about latestMusic">
        <div className="broodImg">
          <img src={AboutImg} alt="Joshua Israel" />
        </div>

        <div className="about-content latestMusic-content">
          <h2 className="sectionTitle">About</h2>
          <p className="sectionDescription">
            Joshua Israel is a creative music director, profound vocalist,
            dynamic music producer and multi-talented instrumentalist.
          </p>

          <p className="moreMusic">Learn More</p>
        </div>
      </div>

      {/* JOIN */}
      <div className="join">
        <h2 className="sectionTitle">Join Our Community</h2>

        <p className="sectionDescription">
          Join our exclusive community for all things Joshua Israel.
        </p>

        <div className="joinForm">
          <input placeholder="Full Name" />
          <input placeholder="Location" />
          <input placeholder="Email" />
          <input placeholder="Phone Number" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
      
    </>
  )
}
