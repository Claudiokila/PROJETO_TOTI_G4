import Header from '../../components/Header';
import '../agendar/agendar.css'

function agendar(){
    return(
        <div>
            <Header/>
            <div className='geral-a'>
                
                <h className="titulo">Bora Agendar!</h>
                <div>Nome</div>
                <input type="name" placeholder='jhon'></input>
                <div>Email</div>
                <input type="email" placeholder='jhon@'></input>
                <div>Data</div>
                <input type="date" placeholder=' dd/mm/ano'></input>
                <div>Hora</div>
                <input type="time" placeholder=' '></input>
                <div>Fone</div>
                <input type="number" placeholder='(DD)-------   '></input>
                <div>Serviço</div>
                <select className='op' name='escolher'>
                    <option value="dark">Preenchimento</option>
                    <option value="dark">Toxina botulínica</option>
                    <option value="dark">Estímulo de colageno</option>
                    <option value="dark">Laser</option>

           
                 </select>
                  <div></div>
                <button>Agendar</button>
                
            </div>
           
        </div>
    )
}
export default agendar;