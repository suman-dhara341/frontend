import axios from 'axios'
import { nowPlaingMovies, options } from '../../utils/index'
import  {setNowPlaingMovies}  from '../../redux/movieSlice'
import { useDispatch } from 'react-redux'


const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(nowPlaingMovies, options)
        if (res.status===200) {
            dispatch(setNowPlaingMovies(res.data.results))
        }
    } catch (error) {
        console.log(error);
    }
}

export default useNowPlayingMovies

