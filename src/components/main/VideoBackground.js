import useMoviesById from '../Hooks/useMoviesById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ id, open = false }) => {
  const trailer = useSelector((state) => state.movies?.trailer?.key);
  useMoviesById(id);

  return (
    <div className={`${open ? "h-96 w-full overflow-hidden" : "h-screen w-full overflow-hidden"}`}>
      <iframe
        className={`${open ? "w-full h-full aspect-auto" : "w-screen h-full aspect-auto"}`}
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&loop=1&playlist=${trailer}`}
        title="YouTube video player"
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
