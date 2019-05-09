import React from 'react';

import Renderer from './Renderer';
import './styles.css'

class CssVariables extends React.Component {
    state = {
        spacing: 10,
        blur: 10,
        base: "#ffc600"
    }

    onChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
        value = name === 'base' ? value : `${value}px`;
        document.documentElement.style.setProperty(`--${name}`, value);
    }

    render() {
        return (
            <Renderer {...this.state} onChange={this.onChange} />
        )
    }
}

export default CssVariables;