import './style.css';
import { useLocation } from 'react-router-dom';
const Movie = () => {
  const location = useLocation();
  console.log('location', JSON.stringify(location));
  const { data } = location?.state;
  console.log('data', data);
  return (
    <div>
      <p>{data?.title}</p>
    </div>
  );
};

export default Movie;
