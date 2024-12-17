import { CiSearch } from "react-icons/ci";
import axios from 'axios'
import { useState } from "react";
import { options } from "./utils";
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from "./redux/movieSlice";
import MovieList from "./components/main/MovieList";

const SearchMovies = () => {
    const [searchInput, setsearchInput] = useState('')
    const dispatch = useDispatch()
    const movieTitle = useSelector((state) => state.movies?.movieName)
    const movies = useSelector((state) => state.movies?.searchedMovie || []);

    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, options)
        const movies = res.data?.results
        dispatch(setSearch({ searchMovie: searchInput, movies }))
        setsearchInput('')
    }
    return (
        <div className="flex flex-col items-center pt-24 bg-black h-screen">
            <form onSubmit={submitHandler}>
                <div className="flex justify-between shadow-md gap-1 rounded-lg md:w-[30rem] p-1">
                    <input
                        className="w-full p-2 outline-none rounded-md text-lg bg-gray-500"
                        type="text"
                        onChange={(e) => setsearchInput(e.target.value)}
                        value={searchInput}
                        placeholder='Search Movies...' />
                    <button className="rounded-md p-2 bg-red-800 text-white">
                        <CiSearch size={'25px'} />
                    </button>
                </div>
            </form>
            <div className="w-screen">
                {
                    movies && movies.length > 0 ? (
                        <MovieList title={movieTitle} movies={movies} />
                    ) : (
                        <p className="text-white">No movies found</p>
                    )
                }

            </div>
        </div>
    )
}

export default SearchMovies