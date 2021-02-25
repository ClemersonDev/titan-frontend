import React, { useState } from 'react';
import Shelf from '../../Components/shelf/index';
import rest1 from '../../Assets/rest1.jpg';
import rest2 from '../../Assets/rest2.jpg';
import rest3 from '../../Assets/rest3.jpg';
import rest4 from '../../Assets/rest4.jpg';
import rest5 from '../../Assets/rest5.jpg';
import Carousel from '../../Components/carousel/carouselHome';
import CarouselBanner from '../../Components/carouselBanner';
import { Begin } from './styled.js';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

export default function Home() {
    const [heart1, setHeart1] = useState(false);
    const [heart2, setHeart2] = useState(false);
    const [heart3, setHeart3] = useState(false);
    const [heart4, setHeart4] = useState(false);
    const [heart5, setHeart5] = useState(false);

    function searchFixed() {
        window.onscroll = function (oEvent) {
            var box = document.getElementById('search');
            var boxTop = box.getBoundingClientRect().y;
            if (boxTop <= -4) {
                document.getElementById('search-box').classList.add("fixed");                
            } else {
                document.getElementById('search-box').classList.remove("fixed");                
            }
        }
    }


    function changeIcon1() {
        if (heart1 === false) {
            setHeart1(true);
        } else {
            setHeart1(false);
        }
    }

    function changeIcon2() {
        if (heart2 === false) {
            setHeart2(true);
        } else {
            setHeart2(false);
        }
    }

    function changeIcon3() {
        if (heart3 === false) {
            setHeart3(true);
        } else {
            setHeart3(false);
        }
    }

    function changeIcon4() {
        if (heart4 === false) {
            setHeart4(true);
        } else {
            setHeart4(false);
        }
    }

    function changeIcon5() {
        if (heart5 === false) {
            setHeart5(true);
        } else {
            setHeart5(false);
        }
    }

    return(
        <Begin>
            <div className="search-box" id="search" onScroll={searchFixed()}>
                <div className="box" id="search-box">
                    <input type="text" placeholder="buscar estabelecimento" />
                </div>                
            </div>
            <Carousel />
            <Shelf />
            <CarouselBanner />
            <h2>Lojas</h2>
            <div className="stores-box">
                <ul className="stores-list">
                {/* lista de lojas */}
                    <li>
                        <div className="store">
                            <div className="store-left">
                                <img src={rest1} alt="logo" />
                            </div>
                            <div className="store-middle">
                                <p>Pizzaria Barão</p>
                                <div className="store-middle-top">
                                    <p> <FaStar /> <span>4,6</span></p>  
                                    <p>• Pizzaria • </p> 
                                    <p>3,5 km</p>
                                </div>
                                <div className="store-middle-bottom">
                                    <p> 43-53 min</p>  
                                    <p>• R$ 10,49 •</p>   
                                    <p className="status">Aberto</p>                                    
                                </div>
                                
                            </div>
                            <div className="store-right">
                                <button onClick={changeIcon1}>{heart1 ? <FaHeart /> : <FaRegHeart /> }</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="store">
                            <div className="store-left">
                                <img src={rest2} alt="logo" />
                            </div>
                            <div className="store-middle">
                            <p>Pizzaria Barão</p>
                                <div className="store-middle-top">
                                    <p> <FaStar /> <span>4,6</span></p>  
                                    <p>• Pizzaria • </p> 
                                    <p>3,5 km</p>
                                </div>
                                <div className="store-middle-bottom">
                                    <p> 43-53 min</p>  
                                    <p>• R$ 10,49 •</p>   
                                    <p className="status">Aberto</p>                                    
                                </div>
                            </div>
                            <div className="store-right">
                                <button onClick={changeIcon2}>{heart2 ? <FaHeart /> : <FaRegHeart /> }</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="store">
                            <div className="store-left">
                                <img src={rest3} alt="logo" />
                            </div>
                            <div className="store-middle">
                            <p>Pizzaria Barão</p>
                                <div className="store-middle-top">
                                    <p> <FaStar /> <span>4,6</span></p>  
                                    <p>• Pizzaria • </p> 
                                    <p>3,5 km</p>
                                </div>
                                <div className="store-middle-bottom">
                                    <p> 43-53 min</p>  
                                    <p>• R$ 10,49 •</p>   
                                    <p className="status">Aberto</p>                                    
                                </div>
                            </div>
                            <div className="store-right">
                                <button onClick={changeIcon3}>{heart3 ? <FaHeart /> : <FaRegHeart /> }</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="store">
                            <div className="store-left">
                                <img src={rest4} alt="logo" />
                            </div>
                            <div className="store-middle">
                            <p>Pizzaria Barão</p>
                                <div className="store-middle-top">
                                    <p> <FaStar /> <span>4,6</span></p>  
                                    <p>• Pizzaria • </p> 
                                    <p>3,5 km</p>
                                </div>
                                <div className="store-middle-bottom">
                                    <p> 43-53 min</p>  
                                    <p>• R$ 10,49 •</p>   
                                    <p className="status">Aberto</p>                                    
                                </div>
                            </div>
                            <div className="store-right">
                                <button onClick={changeIcon4}>{heart4 ? <FaHeart /> : <FaRegHeart /> }</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="store">
                            <div className="store-left">
                                <img src={rest5} alt="logo" />
                            </div>
                            <div className="store-middle">
                            <p>Pizzaria Barão</p>
                                <div className="store-middle-top">
                                    <p> <FaStar /> <span>4,6</span></p>  
                                    <p>• Pizzaria • </p> 
                                    <p>3,5 km</p>
                                </div>
                                <div className="store-middle-bottom">
                                    <p> 43-53 min</p>  
                                    <p>• R$ 10,49 •</p>   
                                    <p className="status">Aberto</p>                                    
                                </div>
                            </div>
                            <div className="store-right">
                                <button onClick={changeIcon5}>{heart5 ? <FaHeart /> : <FaRegHeart /> }</button>
                            </div>
                        </div>
                    </li>
                    {/* fim da lista de lojas */}
                </ul>
            </div>
        </Begin>
    );
}