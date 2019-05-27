import React from 'react';

import './style.css';

class ShiftAndCheck extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <!--
                The following is a common layout you would see in an email client.
                When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.
                --> */}
                <div class="inbox">
                    <div class="item">
                        <input type="checkbox" />
                        <p>This is an inbox layout.</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Check one item</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Hold down your Shift key</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Check a lower item</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Everything in between should also be set to checked</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Try to do it without any libraries</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Just regular JavaScript</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Good Luck!</p>
                    </div>
                    <div class="item">
                        <input type="checkbox" />
                        <p>Don't forget to tweet your result!</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShiftAndCheck;