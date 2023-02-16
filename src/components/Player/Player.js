import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

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
                <h4>{props.songs[props.nextSongIndex].id} of {props.songs.length} songs</h4>
                <audio id='audio' onEnded={SkipSong} src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <Details song={props.songs[props.currentSongIndex]} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <p>Next Up: <span>{props.songs[props.nextSongIndex].id+1}. {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
                <div className='bouda'><h4>DrissBouda &copy;</h4></div>
            </div>
    )
}

export default Player;
