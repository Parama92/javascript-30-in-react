import React from 'react';

import './Clock.css';
import SecondHand from './SecondHand';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';

export class Clock extends React.Component {

    state = {
        secondsDegrees: 90,
        minutesDegrees: 90,
        hoursDegrees: 90,
        timer: 0
    }

    setDate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = (seconds * (360 / 60) + 90);
        const minutes = now.getMinutes();
        const minutesDegrees = (minutes * (360 / 60) + 90);
        const hours = now.getHours();
        const hoursDegrees = (hours * (360 / 12) + 90);

        this.setState({
            secondsDegrees,
            minutesDegrees,
            hoursDegrees
        })
    }

    componentDidMount() {
        const timer = setInterval(this.setDate, 1000);
        this.setState({
            timer
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-face">
                    <HourHand hoursDegrees={this.state.hoursDegrees} />
                    <MinuteHand minutesDegrees={this.state.minutesDegrees} />
                    <SecondHand secondsDegrees={this.state.secondsDegrees} />
                </div>
            </div>
        )
    }
}

export default Clock
