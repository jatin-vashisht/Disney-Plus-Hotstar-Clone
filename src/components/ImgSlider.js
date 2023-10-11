import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
    <Carousel {...settings}>
      <Wrap>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fslider-badging.jpg?alt=media&token=1747c490-6a98-4dee-8712-68233a60e10c&_gl=1*1mcrsk6*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjUxMi42MC4wLjA." alt="Carousel Image 1" />
      </Wrap>

      <Wrap>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fslider-scale.jpg?alt=media&token=2516f372-ee6d-41f9-999e-29038d338590&_gl=1*1rykzzo*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjUwMS42LjAuMA.." alt="Carousel Image 2" />
      </Wrap>

      <Wrap>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fslider-badag.jpg?alt=media&token=f16bdd5c-c3cc-479f-be04-2b9ee8969800&_gl=1*8lbqo2*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjUyNS40Ny4wLjA." alt="Carousel Image 3" />
      </Wrap>

      <Wrap>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fslider-scales.jpg?alt=media&token=411d3d93-5727-4769-b53e-a2d889abceed&_gl=1*3pj292*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjQ4Ny4yMC4wLjA." alt="Carousel Image 4" />
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`  // directly using a Slider (react-slick) and styling it
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150,158,171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border-color: rgba(249,249,249,0.8);
    }
  }
`

export default ImgSlider