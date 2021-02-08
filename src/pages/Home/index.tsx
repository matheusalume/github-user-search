import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-content">
        <h1 className="home-title">
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </h1>
        <div className="home-text">
            <p>Bem-vindos ao meu desafio do capítulo 3 do Bootcamp DevSuperior</p>
            <p>Funcionalidades extras: validação do input (preenchimento obrigatório) e tratamento do erro 404 (usuário não encontrado)</p> 
            <p>Espero que gostem 😄 Feito por <a href="https://www.linkedin.com/in/matheusalume/" className="home-text-blue">@matheusalume</a></p>            
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="home-text-blue">antforfigma@gmail.com</span></p>            
        </div>
        <Link to="/search">
            <Button label="Começar"/>
        </Link>        
    </div>
);

export default Home;