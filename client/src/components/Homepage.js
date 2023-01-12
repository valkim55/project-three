import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../carousel/carousel1.jpg'
import img2 from '../carousel/carousel2.jpg'
import img3 from '../carousel/carousel3.jpg'

const Homepage = () => {
  return (
    <Carousel variant="dark" className="carouselBox" data-interval="100">
      <Carousel.Item >
        <div className="carouselImg"><img  width="1500"  src={img1} alt="First slide"/></div>
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <div className="carouselImg"><img src={img2} width="1500" alt="Second slide" /></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <div className="carouselImg"><img width="1500" src={img3} alt="Third slide" /></div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default Homepage