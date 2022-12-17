import React from 'react';
import Home from './paginas/Home';
import Serviços from './paginas/serviços/index'
import Agendar from './paginas/agendar'
import Contato from './paginas/contato';
const {pathname} = window.location



function Rende (){
    if( pathname==="/"){
        return <Home />
      }
      else if( pathname==="/servico"){
        return <Serviços />
      } else if( pathname==="/agendar"){
        return <Agendar />
      }else if( pathname==="/contato"){
        return <Contato />
      }
      else{
        return <h1>página não encontrada</h1>
      }
}
export default Rende;