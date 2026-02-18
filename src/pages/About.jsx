import '../styles/about.css'
import PhotoMarquee from "../components/PhotoMarquee"
export default function About() {
    return (
        <div className="AboutMain">
            <div className="aboutHero">
                <h1 className="headerText">About Me</h1>
            </div>
            <div className="aboutContent">
                <p>
                Joshua Israel, known for his energetic way of praising and worshipping God, 
                has earned the monikers "Furious Worshipper" amidst many in the Christian circle. 
                His fervent worship and devotion to the Lord have made him a beloved figure in the Christian community.
                </p><br />
                <p>
                Joshua Israel is a creative music director, profound vocalist, dynamic music producer, 
                excellent song writer and multi-talented instrumentalist who has ministered alongside gospel 
                music greats in Nigeria and around the world.
                </p><br />
                <p>
                Blessed with the kind of sound that opens the portals of heaven, Joshua Israel is passionate to see that 
                people come to God and have an encounter that will last a lifetime.
                </p>
            </div>
            <div className="photoBook">
                <h2>Poto Memories</h2>
                <PhotoMarquee />
            </div>
        </div>
    )
}