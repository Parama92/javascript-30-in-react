import React from "react";

import Panel from './Panel';
import './styles.css';

class Gallery extends React.Component {
    state = {
        panels: [
            {
                id: 1,
                text: "Hey Let's Dance"
            },
            {
                id: 2,
                text: "Give Take Receive"
            },
            {
                id: 3,
                text: "Experience It Today"
            },
            {
                id: 4,
                text: "Give All You-Can"
            },
            {
                id: 5,
                text: "Life In Motion"
            }
        ]
    }
    render() {
        return (
            <div className="panels">
                {this.state.panels.map(panel => <Panel key={panel.id} {...panel} />)}
                {/* <div class="panel panel1">
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
                </div> */}
            </div>
        )
    }
}

export default Gallery;