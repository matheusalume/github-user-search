import { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/requests';
import Profile from './Profile';
import './styles.css';

type Profile = {
    avatar_url: string,
    public_repos: number,
    followers: number,
    following: number,
    company: string,
    blog: string,
    location: string,
    created_at: string
}

type FormState = {
    username: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
    const [formData, setFormData] = useState<FormState>({
        username: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest(formData.username)
            .then(response => console.log(response))
            .catch(error => console.log(error));
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
                </form>                
            </div>
            <Profile />
        </div>        
    );
};

export default Search;