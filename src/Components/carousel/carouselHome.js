import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Container, Slider } from './styled'
import img1 from '../../Assets/pizza.jpg';
import img2 from '../../Assets/bebidas.png';
import img3 from '../../Assets/lunch.png';
import img4 from '../../Assets/gelados.jpg';


function CarouselHome() {

    return (
        <Container>
            <Carousel itemsToShow={4} disableAutoPlay autoPlaySpeed={1500} infinite>
                <Slider>
                    <div className="slider-component">
                        <img src={img1} alt="banner1" />
                        <p className="slider-p" >Pizza</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img2} alt="banner1" />
                        <p className="slider-p" >Bebida</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img3} alt="banner1" />
                        <p className="slider-p" >Comida</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img4} alt="banner1" />
                        <p className="slider-p" >Gelado</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img1} alt="banner1" />
                        <p className="slider-p" >Pizza</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img2} alt="banner1" />
                        <p className="slider-p" >Bebida</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img3} alt="banner1" />
                        <p className="slider-p" >Comida</p>
                    </div>                    
                </Slider>
                <Slider>
                    <div className="slider-component">
                        <img src={img4} alt="banner1" />
                        <p className="slider-p" >Gelado</p>
                    </div>                    
                </Slider>
            </Carousel>
        </Container>

    )
}

export default CarouselHome;
