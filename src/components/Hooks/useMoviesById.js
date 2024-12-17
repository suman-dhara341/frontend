import axios from "axios";
import { options } from "../../utils";
import { useDispatch } from "react-redux";
import { setTrailer } from "../../redux/movieSlice";
import { useEffect } from "react";

const useMoviesById = async (movie_id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const movieIdchange = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options);
                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer"
                })
                dispatch(setTrailer(trailer[0]))
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }
        movieIdchange()
    }, [movie_id])


}

export default useMoviesById;
