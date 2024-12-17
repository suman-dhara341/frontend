import { useDispatch } from "react-redux";
import { TMDB_IMG_URL } from "../../utils"
import { setId, setModal } from "../../redux/movieSlice";
const MovieCard = ({ img, movieId }) => {

    const dispatch = useDispatch()
    if (img === null) return;

    const handleClick = () => {
        dispatch(setModal())
        dispatch(setId(movieId))
    }

    return (
        <div className="w-48 shrink-0 cursor-pointer" onClick={handleClick}>
            <img className="w-full" src={`${TMDB_IMG_URL}/${img}`} alt="movie-banner" />
        </div>
    )
}

export default MovieCard