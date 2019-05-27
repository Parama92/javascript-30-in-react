import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div class="item">
                <input type="checkbox" />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Item;