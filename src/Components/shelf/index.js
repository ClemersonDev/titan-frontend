import React, { useState } from 'react';
import { Shelf, H2 } from './styled.js';
import { FaShoppingCart } from 'react-icons/fa';
import product from '../../Assets/skol.png';
import Carousel from 'react-elastic-carousel'

export default function Shelfs() {
    const [qtdInput1, setQtdInput1] = useState(1);
    const [qtdInput2, setQtdInput2] = useState(1);
    const [qtdInput3, setQtdInput3] = useState(1);

    function increment1() {
        setQtdInput1(qtdInput1 + 1);
    }

    function decrement1() {
        if(qtdInput1 > 1) {
            setQtdInput1(qtdInput1 - 1);
        }
        
    }

    function increment2() {
        setQtdInput2(qtdInput2 + 1);
    }

    function decrement2() {
        if(qtdInput2 > 1) {
            setQtdInput2(qtdInput2 - 1);
        }
        
    }

    function increment3() {
        setQtdInput3(qtdInput3 + 1);
    }

    function decrement3() {
        if(qtdInput3 > 1) {
            setQtdInput3(qtdInput3 - 1);
        }
        
    }

    return(
        <>
        <H2 className="promo-item-colection">Promoção</H2>
        
        <Shelf>
            
            <Carousel itemsToShow={1} disableAutoPlay autoPlaySpeed={1500} infinite>            
                   
                <div className="shelf-container">
                
                <section className="product-item">
                    <section className="product-item__top-box">
                        <div className="flags">
                            <p> 10% OFF</p>
                        </div>
                        <a href="/">
                            <img src={product} alt="productImage"/>
                        </a>
                    </section>
                </section>

                <section className="product-item__price-box">
                    <div className="shelf_item-name">
                        
                        <a href="/">
                            <h3>Skol 600ml</h3>                                           
                        </a>
                        <div>
                                <p className="old-price">
                                    <span>De </span>
                                    <span className="old-box">R$ 7,70 </span>				
                                </p>
                                <span className="new-price">R$ 7,00</span>  
                            </div>
                                   
                    </div>
                </section>

                <section className="wishBtn">
                    <div className="j-shelf__item-buy">
                        <button className="btn-menos" onClick={decrement1} > <span>-</span></button>
                        <input type="text" className="qtd" value={qtdInput1} onChange={e => setQtdInput1(e.target.value)}/>
                        <button className="btn-mais" onClick={increment1} ><span>+</span></button>
                    </div>

                    <a href="/" className="j-shel-item">
                        <span>Adicionar</span>
                        <FaShoppingCart />
                    </a>
                </section>
            </div>

            <div className="shelf-container">
                
                <section className="product-item">
                    <section className="product-item__top-box">
                        <div className="flags">
                            <p> 10% OFF</p>
                        </div>
                        <a href="/">
                            <img src={product} alt="productImage"/>
                        </a>
                    </section>
                </section>

                <section className="product-item__price-box">
                    <div className="shelf_item-name">
                        
                        <a href="/">
                            <h3>Skol 600ml</h3>                                           
                        </a>
                        <div>
                            <p className="old-price">
                                <span>De </span>
                                <span className="old-box">R$ 7,70 </span>				
                            </p>
                            <span className="new-price">R$ 7,00</span>  
                        </div>
                                   
                    </div>
                </section>

                <section className="wishBtn">
                    <div className="j-shelf__item-buy">
                        <button className="btn-menos" onClick={decrement2}> <span>-</span></button>
                        <input type="text" className="qtd" value={qtdInput2} onChange={e => setQtdInput2(e.target.value)}/>
                        <button className="btn-mais" onClick={increment2}><span>+</span></button>
                    </div>

                    <a href="/" className="j-shel-item">
                        <span>Adicionar</span>
                        <FaShoppingCart />
                    </a>
                </section>
            </div>

            <div className="shelf-container">
                
                <section className="product-item">
                    <section className="product-item__top-box">
                        <div className="flags">
                            <p> 10% OFF</p>
                        </div>
                        <a href="/">
                            <img src={product} alt="productImage"/>
                        </a>
                    </section>
                </section>

                <section className="product-item__price-box">
                    <div className="shelf_item-name">
                        
                        <a href="/">
                            <h3>Skol 600ml</h3>                                           
                        </a>
                        <div>
                                <p className="old-price">
                                    <span>De </span>
                                    <span className="old-box">R$ 7,70 </span>				
                                </p>
                                <span className="new-price">R$ 7,00</span>  
                            </div>
                                   
                    </div>
                </section>

                <section className="wishBtn">
                    <div className="j-shelf__item-buy">
                        <button className="btn-menos" onClick={decrement3}> <span>-</span></button>
                        <input type="text" className="qtd" value={qtdInput3} onChange={e => setQtdInput3(e.target.value)}/>
                        <button className="btn-mais" onClick={increment3}><span>+</span></button>
                    </div>

                    <a href="/" className="j-shel-item">
                        <span>Adicionar</span>
                        <FaShoppingCart />
                    </a>
                </section>
            </div>
           
            </Carousel>
        </Shelf>
        </>
    );
}