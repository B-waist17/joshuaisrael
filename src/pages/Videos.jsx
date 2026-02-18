import '../styles/videos.css'


export default function Videos() {
    return (
        <div className="musicMain vidMain">
            <div className="vidHero">
                <h1 className="headerText">My Videos</h1>
            </div>
            <div className="latestVid">
                <div className="broodVid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g83wpxSGrIo?si=QNPy0jF9uizKK-FK" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
                <div className="latestMusic-content vidContent">
                    <h2 className="sectionTitle">Latest Video</h2>
                    <h1 className="songTitle">Brood (feat. Pst. Soji Pitan)</h1>

                    <p className="sectionDescription">
                        Brood is more than a song; it is a prayer, a cry, and an invitation
                        for the Holy Spirit to move afresh.
                    </p>

                    <p className="moreMusic">Watch on Youtube</p>
                </div>
        
            </div>
            <div className="otherVids">
                <div className="otherVid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/F7Z8ciDSY1M?si=XtwS-B0wtGbWEB9s" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
                <div className="otherVid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TS6AXil2VCg?si=ShWOPnQBZuVEc-iD" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
                <div className="otherVid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SxiWl__4-bc?si=i1xg5ASytD6oafzT" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
                <div className="otherVid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rHB7fuQVcZc?si=yeiTCUcQgP75x1cB" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
            </div>
            <a href="https://www.youtube.com/channel/UCSWKJz5eA80j_AD4mhCvQKw"><button className="vidBtn">More Videos</button></a>

            
        </div>
    )
}