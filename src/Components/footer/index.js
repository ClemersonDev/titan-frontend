import React from 'react';
import { FaHome, FaHeart, FaTicketAlt, FaShoppingBag } from 'react-icons/fa';
import { Footer } from './styled.js';

export default function Rodape() {
    return(
        <Footer>
            <div className="footer-box">
                <a href="/">
                    <FaHome />
                    <p>Início</p>
                </a>
            </div>

            <div className="footer-box">
                <a href="/">
                    <FaHeart />
                    <p>Favoritos</p>
                </a>
            </div>

            <div className="footer-box">
                <a href="/">
                    <FaTicketAlt />
                    <p>Pedidos</p>
                </a>
            </div>

            <div className="footer-box">
                <a href="/">
                    <FaShoppingBag />
                    <p>Carrinho</p>
                </a>
            </div>
        </Footer>           
    );
}