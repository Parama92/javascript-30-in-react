import React from 'react';

class Renderer extends React.Component {
    render() {
        return (
            <div>
                <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

                <div className="controls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input id="spacing" type="range" name="spacing" min="10" max="200" value={this.props.spacing} onChange={this.props.onChange} />

                    <label htmlFor="blur">Blur:</label>
                    <input id="blur" type="range" name="blur" min="0" max="25" value={this.props.blur} onChange={this.props.onChange} />

                    <label htmlFor="base">Base Color</label>
                    <input id="base" type="color" name="base" value={this.props.base} onChange={this.props.onChange} />
                </div>

                <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />

            </div>
        )
    }
}

export default Renderer;