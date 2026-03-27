import '../styles/photomarquee.css'

import img1 from "../assets/1.JPG"
import img2 from "../assets/2.JPG"
import img3 from "../assets/3.JPG"
import img4 from "../assets/4.JPG"
import img5 from "../assets/5.JPG"
import img6 from "../assets/6.JPG"
import img7 from "../assets/7.JPG"
import img8 from "../assets/8.JPG"
import img9 from "../assets/9.JPG"
import img10 from "../assets/10.JPG"
import img11 from "../assets/11.JPG"
import img12 from "../assets/12.JPG"
import img13 from "../assets/13.JPG"
import img14 from "../assets/14.JPG"
import img15 from "../assets/15.JPG"
import img16 from "../assets/16.JPG"
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
