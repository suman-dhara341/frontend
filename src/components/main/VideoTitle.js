import Button from '@mui/material/Button';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({ overview ,title}) => {
    return (
        <div className=' text-white absolute top-36 ml-11 flex flex-col gap-4 aspect-video'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='w-1/3'>{overview}</p>
            <div className='flex items-center gap-2'>
                <Button sx={{ background: 'white', color: 'black' }}>
                    <CiPlay1 />
                    <span>Play</span>
                </Button>
                <Button sx={{
                    background: 'gray', color: 'black'
                }}>
                    <CiCircleInfo />
                    <span>Watch more</span>
                </Button>
            </div>
        </div>
    )
}

export default VideoTitle