import React, { Component } from "react";

class featuredCars extends Component {
  state = {
    i: 0,
    images: [
      "../../../static/img/ferrari2.jpg",
      "../../../static/img/McLaren.jpg",
      "../../../static/img/zl1.jpg",
      "../../../static/img/r8.jpg",
    ],
    currentImageURLs: [],

  };

  loadImages = i => {
  
    this.setState({
      currentImageURLs: [this.state.images[i], this.state.images[i + 1]],
    })
    if (i >= this.state.images.length - 2) {
      this.setState({
        i: 0
      });
    } else {
      this.setState({
        i: this.state.i + 2
      })
    }
  }

  componentDidMount() {
    this.loadImages(this.state.i);
  }

  goToNextSlide = () => {
    this.loadImages(this.state.i);
  };

  render() {
  
    return (
      <div className="feat-cars-wrap">
        <h2>Featured Rentals</h2>
        <button
          aria-label="Previous Image"
            className="prevButton"
            onClick={this.goToNextSlide}
          />
          <button
            aria-label="Next Image"
            className="nextButton"
            onClick={this.goToNextSlide}
          />
        <div>
         
          <div className="feat-cars-wrap__row">
            <div className="feat-cars-wrap__img-wrap">
              <img
                className="image"
                src={this.state.currentImageURLs[0]}
                alt="Lambo"
              />
            </div>
            <div className="feat-cars-wrap__img-wrap">
              <img
                className="image2"
                src={this.state.currentImageURLs[1]}
                alt="Ferrari"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default featuredCars;
