import React from 'react';

class HourHand extends React.Component {
    render() {
        const transformStyle = { transform: `rotate(${this.props.hoursDegrees}deg)` };
        return (
            <div style={transformStyle} className="hand hour-hand"></div>
        )
    }
}

export default HourHand