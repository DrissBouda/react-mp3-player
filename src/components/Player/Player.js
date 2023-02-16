import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null)
    // useState area
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [curduration, setCurduration] = useState(0)
    //const [intervalId, setIntervalId] = useState(null);

    const handleLoadedMetadata = () => {
        setDuration(audioEl.current.duration);
        setInterval(() => {
            setCurduration(audioEl.current.currentTime);
          }, 1000);
    };

    function formatDuration1(duration) {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function formatDuration2(curduration) {
        const minutes = Math.floor(curduration / 60);
        const seconds = Math.floor(curduration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    // useEffect area
    useEffect(() => {
        const artistox = document.getElementById("artistImage");
        if (isPlaying) {
            audioEl.current.play();
            artistox.classList.add("rotate");
            artistox.classList.remove("paused");
        } else {
            audioEl.current.pause();
            artistox.classList.add("paused");
        }
           
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player">
                <h4>{props.songs[props.nextSongIndex].id} out of {props.songs.length} songs</h4>
                <audio 
                    id='audio' onEnded={SkipSong} 
                    src={props.songs[props.currentSongIndex].src} 
                    ref={audioEl}
                    onLoadedMetadata={handleLoadedMetadata}
                >
                </audio>
                <Details song={props.songs[props.currentSongIndex]} />
                <p className='duration'>{formatDuration2(curduration)} &mdash; {formatDuration1(duration)}</p>
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <p>Next 3 songs:
                    <div className='next-songs'>
                        <span>{props.songs[props.nextSongIndex].id+1}. {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span>
                        <span>{props.songs[props.nextSongIndex].id+2}. {props.songs[props.nextSongIndex + 1].title} by {props.songs[props.nextSongIndex + 1].artist}</span>
                        <span>{props.songs[props.nextSongIndex].id+3}. {props.songs[props.nextSongIndex + 2].title} by {props.songs[props.nextSongIndex + 2].artist}</span>
                    </div>
                </p>
                <div className='bouda'><h4>DrissBouda &copy;</h4></div>
            </div>
    )
}

export default Player;
