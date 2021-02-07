import { Link , Redirect} from 'react-router-dom';
import './styles.css';

type Props = {
    label: string;
    action?: () => void;
}

const Button = ({ label, action }: Props) => (
    <button className="my-button" onClick={action}>
        {label}  
    </button>
);

export default Button;