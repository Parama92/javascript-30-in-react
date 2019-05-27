import React from 'react';

import './style.css';
import Item from './Item';

class ShiftAndCheck extends React.Component {
    state = {
        items: [
            {
                id: 1,
                text: "This is an inbox layout."
            },
            {
                id: 2,
                text: "Check one item"
            },
            {
                id: 3,
                text: "Hold down your Shift key"
            },
            {
                id: 4,
                text: "Check a lower item"
            },
            {
                id: 5,
                text: "Everything in between should also be set to checked"
            },
            {
                id: 6,
                text: "Try to do it without any libraries"
            },
            {
                id: 7,
                text: "Just some React"
            },
            {
                id: 8,
                text: "Good Luck!"
            },
            {
                id: 9,
                text: "Don't forget to tweet your result!"
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                {/* <!--
                The following is a common layout you would see in an email client.
                When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.
                --> */}
                <div class="inbox">
                    {this.state.items.map(item => <Item key={item.id} text={item.text} />)}
                </div>
            </React.Fragment>
        )
    }
}

export default ShiftAndCheck;