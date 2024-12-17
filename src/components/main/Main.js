import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
// import MovieContainer from './MovieContainer'
import { useSelector } from 'react-redux'

const Main = () => {
    const movies = useSelector((state) => state.movies?.nowPlaingMovies)

    if(!movies) return;
    const { overview, id, title }=movies[2]
    
    return (
        <div className='relative'>
            <VideoTitle overview={overview} title={title} />
            <VideoBackground id={id} />
        </div>
    )
}

export default Main