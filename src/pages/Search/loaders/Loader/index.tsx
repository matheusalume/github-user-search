import ImageLoader from '../ImageLoader';
import InfoLoader from '../InfoLoader';
import './styles.css';

const Loader = () => (
    <div className="loader">
        <ImageLoader />
        <InfoLoader />
    </div>
);

export default Loader;