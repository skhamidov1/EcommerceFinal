import React, { Component } from "react";
import Slider from "react-slick";

class featuredCars extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="feat-cars-wrap">
        <h2>Featured Rentals</h2>
        <Slider {...settings}>
          <div>
            <img src="static/img/ferrari2.jpg" alt="" />
          </div>
          <div>
            <img src="static/img/zr1.jpg" alt="" />
          </div>
          <div>
            <img src="static/img/r8.jpg" alt="" />
          </div>
          <div>
            <img src="static/img/gtrNismo.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default featuredCars;
