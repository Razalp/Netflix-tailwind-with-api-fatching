import React, { useEffect, useState } from 'react';
import Request from '../Request';
import axios from 'axios';

const Main = () => {
  const key = process.env.REACT_APP_API_KEY;
  
  const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,

  };
  const [movies, setMovies] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePlayClick = () => {
    
    axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}`)
      .then(response => {
        const trailers = response.data.results.filter(result => result.type === 'Trailer');
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
          setShowTrailer(true);
        } else {
          
          console.error('No trailers available for this movie.');
        }
      })
      .catch(error => {
        console.error('Error fetching trailer information:', error);
      });
  };

  
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
     console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {  
      return str;
    }
  };

  return (
     <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-t from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button
              className='border bg-gray-300 text-black-2 border-gray-300 py-2 px-5'
              onClick={handlePlayClick}
            >
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          {showTrailer && (
            <div className='mt-4'>
              <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          )}
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 50)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;