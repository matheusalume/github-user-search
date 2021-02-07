import Button from '../../core/components/Button';
import './styles.css';

const Search = () => {
    return (
        <div className ="search-profile">
            <h1 className="search-title">Encontre um perfil Github</h1>
            <input className="search-input" placeholder="Usuário Github"/>
            <Button label="Encontrar"/>
        </div>
    );
};

export default Search;