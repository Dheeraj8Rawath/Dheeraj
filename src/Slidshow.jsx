import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import myimage1 from "./Image/Dog.jpg"
import myimage2 from "./Image/Dog2.jpg"
import myimage3 from "./Image/Dog3.jpg"


const Slide=()=>{
    return(
        <>
        <div className="slideA">
       <Carousel>
  <Carousel.Item>
      <img
      className="slide"
      src={myimage1}
      alt="First slide"
    />
    
    <Carousel.Caption>
    <h1>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={myimage2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h1>s
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={myimage3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
       
       </>
    )
}

export default Slide;