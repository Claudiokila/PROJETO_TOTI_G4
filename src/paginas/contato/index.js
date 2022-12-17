import Header from '../../components/Header';
import '../contato/contato.css'
import {usestate} from 'react'

function Contato(){
    
    return(
        <div className='App'>
            <Header/>
            <div className='geral-b'>
                <form name='valid'>
                    <h className="titulo">Entra em contato!</h>
                    <div>Nome</div>
                    <input type="name" placeholder='jhon' name='nome'></input>
                    <div>Email</div>
                    <input type="email" placeholder='jhon@' name='email' ></input>
                    <div>Menssagem</div>
                    <textarea name='description' cols={30} rows={10}></textarea>
                    <div></div>
                    <button>Enviar</button>
                    <button>watssap</button>
                </form>
                
                
            </div>
        </div>
    )
}
export default Contato;