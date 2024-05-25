import React from 'react'
import { Carousel } from "react-responsive-carousel"
import { img } from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
 import classes from "./Carousel.module.css"

function CarouselEffect() {
    return (
      <div>
        <Carousel
          autolay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {img?.map((imageItemLink) => {
            return <img key={imageItemLink} src={imageItemLink} />;
          })}
        </Carousel>
        <div className={classes.hero_img}></div>
      </div>
    );
}

export default CarouselEffect
