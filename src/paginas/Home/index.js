import Header from '../../components/Header';
import imagem3 from '../Home/brilho1.jpg'
import imagem4 from '../Home/brilho2.jpg'
import '../Home/home.css'

function Home(){
    return(
        <div className='App'>
            <Header/>
            <div className='quarta'>
                <h1>Beauty</h1>
                <h3>Seja bem vindo ao nosso site!</h3>
                <p>Os serviços da EXPOSE contemplam procedimentos e tecnologias<br/>
                para depilação a laser, emagrecimento, eliminação de gordura localizada, <br/>
                flacidez, celulite, estrias, manchas, acne e linhas de expressão. <br/>
                Além de trabalhar com o que há de mais moderno no mercado,<br/>
                profissionais altamente qualificados, protocolos próprios baseados<br/>
                    em cientificidade e ambiente agradável e aconchegante para lhe proporcionar <br/>
                    a melhor experiência e com toda a segurança.</p>
                    <img src={imagem3} className="Z"/>
                    <img src={imagem4} className="Z"/>
                    
            </div>
        </div>
    )
}
export default Home;