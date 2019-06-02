import React from 'react';

import './styles.css';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.progressBarRef = React.createRef();
    }

    state = {
        playerState: '►',
        volume: 1,
        playbackRate: 1,
        mousedown: false,
        progress__filled: {
            width: "50%",
            background: "#ffc600",
            flex: 0,
            flexBasis: "50%",
        }
    }

    togglePlay = () => {
        const player = this.videoRef.current;
        const state = player.paused ? 'play' : 'pause';
        player[state]();
    }

    updatePlayerState = () => {
        const player = this.videoRef.current;
        const button = player.paused ? '►' : '❚ ❚';
        this.setState({
            playerState: button
        });
    }

    handleSkip = (e) => {
        const player = this.videoRef.current;
        const skip = e.target.dataset.skip;
        player.currentTime += Number(skip);
    }

    handleSliderValues = e => {
        const { name, value } = e.target;
        const player = this.videoRef.current;
        player[name] = value;
        this.setState({
            [name]: value
        });
    }

    updateProgessBar = () => {
        const player = this.videoRef.current;
        const progress = player.currentTime / player.duration * 100;
        this.setState(prevState => {
            let progressBarStyles = { ...prevState.progress__filled };
            progressBarStyles.flexBasis = `${progress}%`;
            return {
                progress__filled: progressBarStyles
            };
        })
    }

    scrub = (e) => {
        const player = this.videoRef.current;
        const progressBar = this.progressBarRef.current.offsetWidth;
        const time = (e.nativeEvent.offsetX / progressBar) * player.duration;
        player.currentTime = time;
    }

    setMouseDown = (state) => {
        this.setState({
            mousedown: state
        })
    }

    render() {
        return (
            <div className="player">
                <video ref={this.videoRef} onPlay={this.updatePlayerState} onPause={this.updatePlayerState} onClick={this.togglePlay} onTimeUpdate={this.updateProgessBar} className="player__video viewer" src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"></video>
                <div className="player__controls">
                    <div className="progress"
                        onClick={this.scrub}
                        ref={this.progressBarRef}
                        onMouseDown={() => this.setMouseDown(true)}
                        onMouseUp={() => this.setMouseDown(false)}
                        onMouseMove={(e) => this.state.mousedown && this.scrub(e)}
                    >
                        <div style={this.state.progress__filled}></div>
                    </div>
                    <button className="player__button toggle" title="Toggle Play" onClick={this.togglePlay}>{this.state.playerState}</button>
                    <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={this.state.volume} onChange={this.handleSliderValues} />
                    <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value={this.state.playbackRate} onChange={this.handleSliderValues} />
                    <button data-skip="-10" onClick={this.handleSkip} className="player__button">« 10s</button>
                    <button data-skip="25" onClick={this.handleSkip} className="player__button">25s »</button>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;