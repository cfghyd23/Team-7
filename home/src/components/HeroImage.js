import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../components/Seperator/Seperator";

import "./HeroImageStyle.css";
import { Separator } from "../components/Seperator/Seperator";
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register";
import { Link } from 'react-router-dom';

const imageData = [
  // Image data array
  {
    label: "Image 1",
    alt: "image1",
    url:
    "https://static.wixstatic.com/media/2cdbfc_4a8be7850de94634be22c34df4d056b5~mv2_d_5000_3709_s_4_2.png"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://qph.cf2.quoracdn.net/main-qimg-fae37baeaf2e7e890f01b84dcbefe42d-lq"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://assets.thehansindia.com/h-upload/2020/10/10/1004733-marpu.webp"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/105598890_1164204010589536_4029391625015615390_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KMWfLy4eOfIAX9T11b4&_nc_ht=scontent-bom1-1.xx&oh=00_AfD-vBBUGUnwh0XJMEMhgBEQidsWJcUFzmSiZiqYLLofEg&oe=64AC3182"
  },
  {
    label: "Image 5",
    alt: "image5",
    url: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/100961732_1136938676649403_7974921431563632640_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=St3IlaksYgcAX_nS9fj&_nc_ht=scontent-bom1-1.xx&oh=00_AfBYctG5Ci3i9xQrSoqhrn4hiGg-P27vYywR9-V0qialLQ&oe=64AC2737"
  },
  {
    label: "Image 6",
    alt: "image6",
    url: "https://qph.cf2.quoracdn.net/main-qimg-553740713894c24593a457e8962da51c"
  }

];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

export default function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize currentIndex to 0

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <section className="hero-image-container">
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={1500}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </div>
      <div className="text-container">
        <h1 className="heading">What we do?</h1><Separator/><br/>
        <p>
          "MARPU" - means the change.We are a passionate and empathetic 
          team driven by a deep sense of compassion and a desire to make a difference.
          So if you're ready to be a leader in creating a better world, sign up to be a 
          MarpuMaker today and let's make a difference together by raising funds for noble causes!
        </p>
        <div>
  <br/><br/>
  <Link to="Login" className="btn btn-primary" style={{marginLeft: "130px"}} >
    Login
  </Link>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link to="Register" className="btn btn-primary">
    Register
  </Link>
</div>
      </div>
    </section>
  );
}
