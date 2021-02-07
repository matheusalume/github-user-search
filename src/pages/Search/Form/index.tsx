import './styles.css';
import { useState } from 'react';
import Button from '../../../core/components/Button';

type FormState = {
    username: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
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
        // INSERIR REQUEST A API DO GITHUB
    };

    return (
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
    );
};

export default Form;