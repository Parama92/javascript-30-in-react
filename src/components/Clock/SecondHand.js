import React from 'react';

class SecondHand extends React.Component {
    render() {
        const transformStyle = { transform: `rotate(${this.props.secondsDegrees}deg)` };
        return (
            <div style={transformStyle} className="hand second-hand"></div>
        )
    }
}

export default SecondHand;