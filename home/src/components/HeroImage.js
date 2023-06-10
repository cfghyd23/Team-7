import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../components/Seperator/Seperator";
import {Link} from 'react-router-dom'
import "./HeroImageStyle.css";
import { Separator } from "../components/Seperator/Seperator";

const imageData = [
  // Image data array
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
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
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </div>
      <div className="text-container">
        <h4 style={{marginLeft: "200px"}}>About the company</h4><Separator/><br/>
        <p>
          "MARPU" - means the change.We are a passionate and empathetic 
          team driven by a deep sense of compassion and a desire to make a difference.
          So if you're ready to be a leader in creating a better world, sign up to be a 
          MarpuMaker today and let's make a difference together!
        </p>
        <div>
          <br/><br/>
          <Link to="/login" class="btn">
            Login</Link>
          <Link to="/register" class="btn">
          Register</Link>  
        </div>
      </div>
    </section>
  );
}
