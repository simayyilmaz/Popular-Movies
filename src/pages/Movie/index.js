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

const {data, loading, error, errorDetails} = useFetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=7fe2e00520afd0761911e423d577c7db&language=en-US`);

 console.log('data',data);


  return (
    <div> 

       <Header /> 
      <br/><img className='imagee' src={`https://image.tmdb.org/t/p/w500_and_h282_face/${data?.poster_path}`} alt="movie_details" /><br/>
      <div className='details'>
      <p className='title'>{data?.original_title}</p><br/>
      <p className='datee'>Tarih: {data?.release_date}</p><br/>
      <p className='time'>Süre:  {data?.runtime} min</p><br/>
      <p className='overview'>Açıklama:  {data?.overview}</p><br/>
      <p className='tagline'>Replik:  {data?.tagline}</p><br/>
      <p className='language'>Dil:   {data?.original_language}</p><br/>
      <p className='country'>Ülke: production_countries}</p><br/>
      <p className='vote'>IMDB Reyting:  {data?.vote_average}</p><br/>
      <p className='votecount'>Oy Sayısı:  {data?.vote_count}</p><br/>
      </div>

      <Footer />
      
    </div>
  );
};

export default Movie;
