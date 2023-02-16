import React from 'react'

function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img id='artistImage' onError={((e)=>{e.target.src = '/error-404.png'})} src={props.song.img_src} alt={props.song.artist} />
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default Details
