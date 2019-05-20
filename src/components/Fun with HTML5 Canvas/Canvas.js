import React from 'react';

import './styles.css';

class Canvas extends React.Component {
    render() {
        return (
            <canvas id="draw" width="800" height="800"></canvas>
        )
    }
}

export default Canvas;