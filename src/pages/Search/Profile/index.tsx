import Button from '../../../core/components/Button';
import { User } from '../../../core/types/User';
import './styles.css'

type Props = {
    userData: User
}

const Profile = ({ userData }: Props) => (
    <div className="profile">
        <div className="profile-content">
            <img 
                src={userData.avatar_url}
                alt=""
                className="profile-image"
            />
            <div className="profile-info">
                <div className="profile-numbers">
                    <span className="profile-numbers-span">
                        Repositórios públicos: {userData.public_repos}
                    </span>
                    <span className="profile-numbers-span">
                        Seguidores: {userData.followers}
                    </span>
                    <span className="profile-numbers-span">
                        Seguindo: {userData.following}
                    </span>                            
                </div>
                <div className="profile-personal-info">
                    <h1>Informações</h1>
                    <ul>
                        <li>
                            <b>Empresa:</b> {userData.company}
                        </li>
                        <li>
                            <b>Website/Blog:</b> {userData.blog}
                        </li>
                        <li>
                            <b>Localidade:</b> {userData.location}
                        </li>
                        <li>
                            <b>Membro desde:</b> {userData.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        </div>                
        <Button label="Ver Perfil" />
    </div>
);

export default Profile;