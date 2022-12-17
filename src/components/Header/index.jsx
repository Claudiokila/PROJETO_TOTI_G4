import React from "react";
import '../Header/header.css'
import logo from '../Header/logo.jpeg'

function Header(){

    return(
      
        <div className="cabe">
            <div>
            <img src={logo} alt="logotipo" className="logot"/>
            </div>
            <ul className="menu">
                
                <li><a href="/">Home</a></li>
                <li><a href="/servico">Serviços</a></li>
                <li><a href="/agendar">Agendar</a></li>
                <li><a href="/contato">Contato</a></li>
              
            </ul>
        </div>

                  
    )
}
export default Header;