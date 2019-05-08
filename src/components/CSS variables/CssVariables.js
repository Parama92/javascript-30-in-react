import React from 'react';

import Renderer from './Renderer';
import './styles.css'

class CssVariables extends React.Component {
    state = {
        spacing: 10,
        blur: 10,
        base: "#ffc600"
    }
    render() {
        return (
            <Renderer {...this.state} />
        )
    }
}

export default CssVariables;