import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: 0
    };
  }

  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState({
      index:
        this.state.index < this.state.images.length ? this.state.index + 1 : 0
    });
  };

  rightClick = () => {
    this.setState({
      index:
        this.state.index < 0 ? this.state.images.length : this.state.index - 1
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.index]}
        style={{ display: "block" }}
        alt=""
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
