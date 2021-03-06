import { useEffect, useRef } from 'react';
import { START_CURRENT_TIME } from '../../const';
import { Film } from '../../types/films';

type VideoPlayerProps = {
  isPlaying: boolean;
  film: Film;
};

function VideoPlayer({ film, isPlaying }: VideoPlayerProps): JSX.Element {
  const { posterImage, previewVideoLink } = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = START_CURRENT_TIME;
    videoRef.current.load();

  }, [isPlaying, previewVideoLink]);

  return (
    <video
      ref={videoRef}
      src={previewVideoLink}
      className="player__video"
      poster={posterImage}
      muted
    />
  );
}

export default VideoPlayer;
