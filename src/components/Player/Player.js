import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume1, setVolume1] = useState(100);

    const handleVolumeChange = (event) => {
        const volume1 = event.target.value;
        setVolume1(volume1);
        document.getElementById('audio').volume = volume1 / 100
    };

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
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
                <audio id='audio' onEnded={SkipSong} src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <Details song={props.songs[props.currentSongIndex]} />
                <p><FontAwesomeIcon icon={faVolumeUp} /> <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume1}
                        onChange={handleVolumeChange}
                    />
                    </p>
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <p>Next up: <span>{props.songs[props.nextSongIndex].id+1}. {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            </div>
    )
}

export default Player;
