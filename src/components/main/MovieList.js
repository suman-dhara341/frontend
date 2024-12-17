import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return (
        <div>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <div className="overflow-x-auto no-scrollbar flex gap-4 p-4">
                {movies?.map((movie, index) => (
                    <MovieCard key={index} img={movie.poster_path} movieId={movie.id} />
                ))}
            </div>
        </div>

    )
}

export default MovieList
