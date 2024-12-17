import axios from 'axios'
import { options, useTopRateds } from '../../utils';
import { useDispatch } from 'react-redux';
import { setTopRated } from '../../redux/movieSlice';

const useTopRated = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios(useTopRateds, options)

        if (res.status === 200) {
            dispatch(setTopRated(res.data.results));
        }
    } catch (error) {
        console.log(error);

    }
}

export default useTopRated