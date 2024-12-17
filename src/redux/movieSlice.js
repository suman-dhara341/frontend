import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nowPlaingMovies: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    toggle: false,
    trailer: null,
    movieName: null,
    searchedMovie: null,
    modal: false,
    id: null
}

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setNowPlaingMovies: (state, action) => {
            state.nowPlaingMovies = action.payload
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        setTopRated: (state, action) => {
            state.topRated = action.payload
        },
        setUpcoming: (state, action) => {
            state.upcoming = action.payload
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload
        },
        setSearch: (state, action) => {
            const { searchMovie, movies } = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = movies;
        },
        setModal: (action) => {
            action.modal = !action.modal
        },
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})


export const { setNowPlaingMovies, setPopularMovies, setTopRated, setUpcoming, setToggle, setTrailer, setSearch, setModal, setId } = moviesSlice.actions

export default moviesSlice.reducer