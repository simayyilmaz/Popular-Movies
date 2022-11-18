import './style.css';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFecth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';




const Movie = () => {
  const location = useLocation();
  console.log('location', JSON.stringify(location));
  const { param } = location?.state;
  console.log('param', param);

const {data, loading, error, errorDetails} = useFetch(`${param?.id}`);

 console.log('data',data);
 
 







  return (
    <div>

       <Header />
      <p>{param?.title}</p>
      <Footer />
      
    </div>
  );
};

export default Movie;
