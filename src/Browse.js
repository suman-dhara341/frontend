import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Main from './components/main/Main'
import MovieContainer from './components/main/MovieContainer'
import useNowPlayingMovies from './components/Hooks/useNowPlayingMovies'
import usePopulerMovies from './components/Hooks/usePopulerMovies'
import useTopRated from './components/Hooks/useTopRated'
import useUpcoming from './components/Hooks/useUpcoming'
import SearchMovies from './SearchMovies'

const Browse = () => {
  const user = useSelector((state) => state.auth?.userData)
  const toggle = useSelector((state) => state.movies?.toggle)

  const navigate = useNavigate()

  // hooks
  useNowPlayingMovies()
  usePopulerMovies()
  useTopRated()
  useUpcoming()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  return (
    <>

      {
        toggle ? <SearchMovies /> :
          <>
            <Main />
            <MovieContainer />
          </>
      }

    </>
  )
}

export default Browse