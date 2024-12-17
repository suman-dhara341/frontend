import axios from 'axios'
import { options, popularMovies } from '../../utils';
import { useDispatch } from 'react-redux';
import { setPopularMovies } from '../../redux/movieSlice';

const usePopulerMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios(popularMovies, options)
        if (res.status === 200) {
            dispatch(setPopularMovies(res.data.results));
        }
    } catch (error) {
        console.log(error);

    }
}

export default usePopulerMovies