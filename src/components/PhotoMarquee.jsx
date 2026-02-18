import '../styles/photomarquee.css'

import img1 from "../assets/1.JPG"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/1.jpg"
import img6 from "../assets/2.jpg"
import img7 from "../assets/3.jpg"
import img8 from "../assets/4.jpg"
import img9 from "../assets/1.jpg"
import img10 from "../assets/2.jpg"
import img11 from "../assets/3.jpg"
import img12 from "../assets/4.jpg"
import img13 from "../assets/1.jpg"
import img14 from "../assets/2.jpg"
import img15 from "../assets/3.jpg"
import img16 from "../assets/4.jpg"
export default function PhotoMarquee() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

  return (
    <div className="marquee-section">
      {/* Top Row */}
      <div className="marquee">
        <div className="marquee-track scroll-left">
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="marquee">
        <div className="marquee-track scroll-right">
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}
