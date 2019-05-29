import React from 'react';

import './style.css';
import Item from './Item';

class ShiftAndCheck extends React.Component {
    state = {
        lastChecked: null,
        items: [
            {
                id: 1,
                text: "This is an inbox layout.",
                checked: false
            },
            {
                id: 2,
                text: "Check one item",
                checked: false
            },
            {
                id: 3,
                text: "Hold down your Shift key",
                checked: false
            },
            {
                id: 4,
                text: "Check a lower item",
                checked: false
            },
            {
                id: 5,
                text: "Everything in between should also be set to checked",
                checked: false
            },
            {
                id: 6,
                text: "Try to do it without any libraries",
                checked: false
            },
            {
                id: 7,
                text: "Just some React",
                checked: false
            },
            {
                id: 8,
                text: "Good Luck!",
                checked: false
            },
            {
                id: 9,
                text: "Don't forget to tweet your result!",
                checked: false
            }
        ]
    }

    handleChange = (e, id) => {
        let shiftPressed = e.shiftKey;

        const newItems = this.state.items.map(item => {
            if (
                (
                    shiftPressed && // shift key is pressed
                    item.id >= Math.min(this.state.lastChecked, id) && // checks if current item is greater than lastChecked, if the current checkbox is below lastChecked, and id passed in the function, if the current checkbox is above lastChecked.
                    item.id <= Math.max(this.state.lastChecked, id) &&
                    item.id != this.state.lastChecked // since lastChecked is already checked, don't alter its state
                ) ||
                (!shiftPressed && item.id === id)
            ) {
                console.log(item);
                item.checked = !item.checked;
            }
            return item;
        });
        this.setState({
            items: newItems,
            lastChecked: id
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <!--
                The following is a common layout you would see in an email client.
                When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.
                --> */}
                <div className="inbox">
                    {this.state.items.map(item => <Item key={item.id} {...item} handleChange={this.handleChange} />)}
                </div>
            </React.Fragment>
        )
    }
}

export default ShiftAndCheck;