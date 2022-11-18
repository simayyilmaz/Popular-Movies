import './style.css';
import {useState, useEffect} from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useFetch from '../../hooks/useFecth';

const Home = () => {

  const {data, loading, error, errorDetails} = useFetch("https://api.themoviedb.org/3/movie/popular?api_key="+"7fe2e00520afd0761911e423d577c7db&language=en-US");
  


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
     <Header />
     <div className='App-content'>
     {loading && data !== null ? <div>Loading...</div> :
      <Carousel 
        responsive={responsive}
        rewind={true}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={2}
        swipeable
        containerClass="container-with-dots"
     >
      <>
       
      </>

      
      {data && data?.results?.map((item, index) => {
        return (
          <> 
          <Card
            key={index}
            title={item?.title}
            overview={item?.overview}
            imagePath={item?.poster_path}
            releaseDate={item?.release_date}
            genreId={item?.genre_ids?.[0]}
          />  
         </>
        );
      })}
     </Carousel>}
     </div>
    <Footer />
    </div>
  );
};

export default Home;
