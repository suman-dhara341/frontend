import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { setId, setModal } from '../redux/movieSlice';
import VideoBackground from './main/VideoBackground';

export default function MovieDialog() {
    const open = useSelector((state) => state.movies.modal)
    const moviesId = useSelector((state) => state.movies.id)

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setModal())
        dispatch(setId(null))
    };

    return (
        <>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <VideoBackground id={moviesId} open={true} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
