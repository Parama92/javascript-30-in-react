import React from 'react';

class MinuteHand extends React.Component {
    render() {
        const transformStyle = { transform: `rotate(${this.props.minutesDegrees}deg)` };
        return (
            <div style={transformStyle} className="hand min-hand"></div>
        )
    }
}

export default MinuteHand;