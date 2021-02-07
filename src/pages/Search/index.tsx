import Button from '../../core/components/Button';
import Form from './Form';
import './styles.css';

const Search = () => {
    return (
        <div className="search-content">
            <div className ="search-div">
                <h1 className="search-title">Encontre um perfil Github</h1>   
                <Form />                  
            </div>
            <div className="profile">
                <div className="profile-content">
                    <img 
                        src="https://avatars.githubusercontent.com/u/52417974?s=400&u=b9b8cc2dbc4b8791c2f116340be3ca68060e3b64&v=4" 
                        alt=""
                        className="profile-image"
                    />
                    <div className="profile-info">
                        <div className="profile-numbers">
                            <span className="profile-numbers-span">
                                Repositórios públicos: 62
                            </span>
                            <span className="profile-numbers-span">
                                Seguidores: 127
                            </span>
                            <span className="profile-numbers-span">
                                Seguindo: 416
                            </span>                            
                        </div>
                        <div className="profile-personal-info">
                            <h1>Informações</h1>
                            <ul>
                                <li>
                                    <b>Empresa:</b> @ZupIT
                                </li>
                                <li>
                                    <b>Website/Blog:</b> https://thewashington.dev
                                </li>
                                <li>
                                    <b>Localidade:</b> Uberlândia
                                </li>
                                <li>
                                    <b>Membro desde:</b> 19/10/2013
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                
                <Button label="Ver Perfil" />
            </div>
        </div>        
    );
};

export default Search;