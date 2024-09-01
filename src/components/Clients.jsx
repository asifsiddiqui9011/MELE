import "../3d.css";

import image1 from "../assets/slider/1.png";
import image2 from "../assets/slider/2.png";
import image3 from "../assets/slider/3.png";
import image4 from "../assets/slider/4.jpg";
import image5 from "../assets/slider/5.png";
import image6 from "../assets/slider/6.png";
import image7 from "../assets/slider/7.png";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Slider = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 7 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={images[0]} alt="Dragon 1" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={images[1]} alt="Dragon 2" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={images[2]} alt="Dragon 3" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={images[3]} alt="Dragon 4" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={images[4]} alt="Dragon 5" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={images[5]} alt="Dragon 6" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={images[6]} alt="Dragon 7" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
