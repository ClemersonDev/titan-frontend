import React from 'react';
// import Carousel from 'react-elastic-carousel'
import { Container, Slider } from './styled'
import banner1 from '../../Assets/banner1.png';
import banner2 from '../../Assets/banner2.png';
import Carousel from "react-slick";


function CarouselHome() { 

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
        <Container>
            <Carousel {...settings}>
                <Slider>
                    <div className="slider-component">
                        <img src={banner1} alt="banner1" />                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner2} alt="banner1" />                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner1} alt="banner1" />
                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner2} alt="banner1" />
                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner1} alt="banner1" />
                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner2} alt="banner1" />
                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner1} alt="banner1" />
                        
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={banner2} alt="banner1" />
                        
                    </div>                    
                </Slider>
            </Carousel>
        </Container>

    )
}

export default CarouselHome;
