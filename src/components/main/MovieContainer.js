import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector((state) => state.movies)

  return (
    <div className='bg-black'>
      <div className='relative -mt-24'>
        <MovieList title={'Top Rated'} movies={movie.topRated} />
        <MovieList title={'Now Playing'} movies={movie.nowPlaingMovies} />
        <MovieList title={'Popular Movies'} movies={movie.popularMovies} />
        <MovieList title={'Upcoming Movies'} movies={movie.upcoming} />
      </div>
    </div>
  )
}

export default MovieContainer  