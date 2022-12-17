import Header from '../../components/Header';
import '../serviços/servico.css'
import imagem1 from '../serviços/1.jpeg'
import imagem from '../serviços/3.jpeg'


function Serviços(){
    return(
        <div className='App'>
            <Header/>

            <div className='primeira'>
                <h3>PREENCHIMENTO</h3>
                <p>
                        Através do preenchimento da face usamos uma substância em consistência de gel, <br/>
                        chamada ácido hialurônico, para preencher e devolver os volumes da face que foram <br/>
                        perdidos ao longo da vida, com técnicas de aplicação para REJUVENESCER. Podemos também <br/>
                        usar técnicas de embelezamento para realçar os pontos fortes de cada face, mantendo a <br/> 
                        individualidade e a identidade, deixando o rosto cada dia mais bonito e harmônico. Harmonização <br/>
                        facial ficou popularmente conhecida por utilizar o acido hialuronico para melhorar a beleza <br/>
                        e a autoestima dos pacientes. Com o preenchimento é possível levantar a face, melhorar rugas, <br/> 
                        realçar a linha do blush, rejuvenescer e embelezar os lábios, amenizar a olheira, o bigode chinês, <br/>
                        definir a mandíbula, alongar e definir o queixo, melhorar o contorno da face.</p>
                <img src={imagem} className="A"/>

            </div>
            <div className='segunda'>
                <h3>TOXINA BOTULÍNICA</h3>
                <p>
                        Trata-se de uma medicação que atua de modo a relaxar a musculatura das áreas a serem aplicadas e desse modo melhorar as<br/>
                        rugas que se formam pelo excesso de movimentação desses músculos. A sua melhor aplicação é quando, ainda jovem, a gente <br/>
                        faz a expressão facial e as rugas já começam a aparecer, como as rugas horizontais da testa, rugas verticais entre as <br/>
                        sobrancelhas e os “pés de galinha”, rugas ao redor dos olhos. Esse tipo de ruga chamamos de rugas dinâmicas,<br/>
                        aquelas que só aparecem quando movimentamos a face. Outra grande aplicação de sucesso da toxina botulínica é para melhorar<br/>
                            a hiperidrose, ou seja, o excesso de produção de suor, que muito incomoda. Como exemplo, nas axilas. Portanto, com o uso do<br/> 
                            produto é possível levantar as sobrancelhas, abrir o olhar, melhorar o contorno facial, tratar bruxismo, sorriso gengival e até <br/>
                            mesmo o excesso de suor nas axilas, virilhas, mãos e pés..</p>
                <img src={imagem1} className="B"/>
                    
            </div>
            <div className='terceira'>
                <h3>ESTÍMULO DE COLÁGENO</h3>
                <p>
                    Os bioestimuladores de colágeno são substâncias aplicadas na pele para estimular a produção natural de fibras de colágeno. Sua aplicação promove a <br/>
                    melhora da papada, a firmeza da face e também pode ser aplicado em diversas áreas do corpo, para melhorar celulites, umbigo triste, flacidez da pele e a <br/>
                    redução da flacidez pós-parto. Com o uso dos bioestimuladores também é possível empinar o bumbum, levantar o rosto e, melhorar de forma geral a textura e a <br/> 
                    flacidez da pele. Atualmente, os principais bioestimuladores injetáveis do mercado são: Sculptra (ácido L-Polilático) e o Radiesse (Hidroxiapatita de cálcio). <br/>
                    Sua ação não é imediata, começando a dar sinais por volta de 45 dias após o início do tratamento. No entanto, os resultados costumam durar aproximadamente 2 anos. <br/>
                    Além da face, os bioestimuladores podem ser aplicados nas mãos, pescoço, colo, parte interna dos braços e joelhos, para atenuar a aparência “craquelada” que essas <br/>
                    regiões adquirem com o passar do tempo. A durabilidade desses efeitos gira em torno de 18 a 24 meses..</p>
                <img src={imagem} className="C"/>
                    
            </div>
        </div>
    )
}
export default Serviços;