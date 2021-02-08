import { useState } from 'react';
import Button from '../../core/components/Button';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/requests';
import Loader from './loaders/Loader';
import Profile from './Profile';
import './styles.css';

type FormState = {
    username: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
    const [user, setUser] = useState<User>();
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState<FormState>({
        username: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        makeRequest(formData.username)
            .then(response => {
                setUser(response.data);
                setNotFound(false);
            })
            .catch(() => {
                setNotFound(true);
                setUser(undefined);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    
    return (
        <div className="search-content">
            <div className ="search-div">
                <h1 className="search-title">Encontre um perfil Github</h1>   
                <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        value={formData.username}
                        onChange={handleOnChange}
                        className="search-input"
                        placeholder="Usuário Github"
                        required
                    />
                    <Button label="Encontrar" />
                    {notFound && <span className="not-found">Usuário não encontrado!</span>}
                </form>                
            </div>
            {isLoading ? <Loader /> : 
                user && <Profile userData={user}/>
            }
        </div>        
    );
};

export default Search;