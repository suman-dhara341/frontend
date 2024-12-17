import axios from 'axios'
import { options, useUpcomings } from '../../utils';
import { useDispatch } from 'react-redux';
import { setUpcoming } from '../../redux/movieSlice';

const useUpcoming = async () => {

    const dispatch = useDispatch()
    try {
        const res = await axios(useUpcomings, options)
        if (res.status === 200) {
            dispatch(setUpcoming(res.data.results));
        }
    } catch (error) {
        console.log(error);

    }
}

export default useUpcoming