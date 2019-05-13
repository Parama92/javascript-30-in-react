import React from "react";

import './styles.css'

class Gallery extends React.Component {
    render() {
        return (
            <div class="panels">
                <div class="panel panel1">
                    <p>Hey</p>
                    <p>Let's</p>
                    <p>Dance</p>
                </div>
                <div class="panel panel2">
                    <p>Give</p>
                    <p>Take</p>
                    <p>Receive</p>
                </div>
                <div class="panel panel3">
                    <p>Experience</p>
                    <p>It</p>
                    <p>Today</p>
                </div>
                <div class="panel panel4">
                    <p>Give</p>
                    <p>All</p>
                    <p>You can</p>
                </div>
                <div class="panel panel5">
                    <p>Life</p>
                    <p>In</p>
                    <p>Motion</p>
                </div>
            </div>
        )
    }
}

export default Gallery;