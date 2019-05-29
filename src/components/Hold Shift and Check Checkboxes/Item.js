import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <input type="checkbox" onClick={(e) => { this.props.handleChange(e, this.props.id) }} onChange={() => { }} checked={this.props.checked} />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Item;