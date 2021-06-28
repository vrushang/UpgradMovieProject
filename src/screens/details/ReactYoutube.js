import React from 'react';
import YouTube from 'react-youtube';

class ReactYoutube extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trailerId: props.trailerId,
        }
    }

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(50);
        console.log(event.target);
    }

    videoOnPlay(event) {
        // access to player in all event handlers via event.target
        const player = event.target;

        console.log(player.getCurrentTime());
    }

    render() {
        const opts = {
            height: '390',
            width: '940',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        }
        const { videoId } = this.state.trailerId;
        return (
            <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} onPlay={this.videoOnPlay} />

        )
    }


}

export default ReactYoutube;