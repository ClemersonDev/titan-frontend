import React from 'react';
import { Header } from './styled.js';
import { FaBars, FaCaretDown, FaUser } from 'react-icons/fa';

export default function Cabecalho() {
    return(
        <Header>
            <div className="header">
                <div className="user-menu">
                    <div className="user-icon">
                        <FaUser />
                    </div>
                    <div className="user-bar">
                        <FaBars />
                    </div>                   
                </div>
                
                <div className="address-box">
                    <p>Receber em</p>
                    <p className="address">Rua C zona oeste, nº 199, centro <FaCaretDown/></p>
                </div>                
            </div>
        </Header>
    );
}