import useFetch from '../../hooks/useFecth';

import './style.css';

const Card = ({title ,id, overview , genre , imagePath , releaseDate ,}) => {


    // const {data, loading, error, errorDetails} = useFetch(`https://api.themoviedb.org/${genreId}/genre/movie/list?api_key=7fe2e00520afd0761911e423d577c7db&language=en-US`);
    // console.log('data', data);
    return (
      <div className='ana'>
    <div className="bg-light-white dib br3 pa3 ma2 grow bw2 shadow-5 ucontainer"
   
    >
      <img className='image' src={`https://image.tmdb.org/t/p/w500_and_h282_face/${imagePath}`} alt="robots" />
      <div>
        <h5 className='main'>{title}</h5><br/>
        <h6 className='description'>{overview}</h6>
        <p  className='type'>{genre}</p><br/>
        <h6 className='date'>{releaseDate}</h6>
      </div>
    </div>
    </div>
    );
  };

  export default Card;