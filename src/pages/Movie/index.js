import './style.css';
import { useLocation, Link } from 'react-router-dom';
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
    <div className='container'> 

       <Header /> 
       <Link to={"/"}>
       <button class="btn" ><strong>go back</strong></button>
       </Link>
       <div>
      <br/><img className='imagee' src={`https://image.tmdb.org/t/p/w500_and_h282_face/${data?.poster_path}`} alt="movie_details" /><br/>
      </div>

      <div className='details'>
      <p className='title'>{data?.original_title}</p><br/>
      <p className='datee'><strong>Tarih:</strong> {data?.release_date}</p><br/>
      <p className='time'><strong>Süre:</strong>  {data?.runtime} min</p><br/>
      <p className='overview'><strong>Açıklama: </strong> {data?.overview}</p><br/>
      <p className='tagline'><strong>Replik: </strong> {data?.tagline}</p><br/>
      <p className='language'><strong>Dil: </strong>  {data?.original_language}</p><br/>
      <p className='country'><strong>Ülke:</strong> production_countries}</p><br/>
      <p className='vote'><strong>IMDB Reyting:</strong>  {data?.vote_average}</p><br/>
      <p className='votecount'><strong>Oy Saysı: </strong> {data?.vote_count}</p><br/>
      </div>

      <Footer />
      
    </div>
  );
};

export default Movie;
