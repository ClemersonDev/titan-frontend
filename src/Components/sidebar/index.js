import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Sidebar } from './styled.js';
import {FaUser, FaListAlt, FaTags, FaQuestionCircle, FaInfoCircle, FaSignOutAlt, FaEdit} from 'react-icons/fa';

export default (props) => {
  return (
    <Sidebar>
        <Menu {...props}>
            <div className="menu-item-personal">
                <section className="menu-item-foto">
                    <FaUser/>
                    {/* <FaEdit id="edit-icon" /> */}
                </section>
                <section className="menu-item-dados">
                    <strong className="menu-item-nome">Olá, Clemerson Costa</strong>
                    <span>clemersoncosta@gmail.com</span>
                    <span>(75) 99999-9876</span>
                </section>
                <section>

                </section>
            </div>
            <div className="menu-nav">
                <div className="menu-nav-box">
                   <a className="menu-item" id="menu-link" href="/">
                        <FaListAlt /> 
                        <span>Meus pedidos</span> 
                    </a> 
                </div>
                
                <div className="menu-nav-box">
                    <a className="menu-item" id="menu-link" href="/servicos">
                        <FaTags /> 
                        <span>Meus cupons</span>
                    </a>  
                </div>
                
                <div className="menu-nav-box">
                    <a className="menu-item" id="menu-link" href="/sobre">
                        <FaQuestionCircle /> 
                        <span>Me ajuda</span>
                    </a> 
                </div>
                
                <div className="menu-nav-box">
                    <a className="menu-item" id="menu-link" href="/contato">
                        <FaInfoCircle /> 
                        <span>Termos e Políticas</span>
                    </a>    
                </div>
                
                <div className="menu-nav-box">
                    <a className="menu-item" id="menu-link" href="/contato">
                        <FaSignOutAlt /> 
                        <span>Sair</span>
                    </a>    
                </div>                
            </div>            
        </Menu>
    </Sidebar>    
  );
};