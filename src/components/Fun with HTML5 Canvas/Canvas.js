import React from 'react';

import './styles.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.drawRef = React.createRef();
        this.state = {
            isDrawing: false,
            lastX: 0,
            lastY: 0,
            ctx: null,
            hue: 0,
            lineWidth: 5,
            direction: true
        }
    }

    draw = e => {
        if (!this.state.isDrawing) return;

        const [x, y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];

        this.setState(prevState => {
            const context = prevState.ctx;
            context.strokeStyle = `hsl(${this.state.hue}, 100%, 50%)`;
            context.lineWidth = this.state.lineWidth;
            return {
                ctx: context
            }
        })
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(this.state.lastX, this.state.lastY);
        this.state.ctx.lineTo(x, y);
        this.state.ctx.stroke();

        this.setState(prevState => {
            let dir = prevState.direction;
            if (prevState.lineWidth >= 100 || prevState.lineWidth <= 1) {
                dir = !prevState.direction;
            }
            return {
                lastX: x,
                lastY: y,
                hue: prevState.hue + 1,
                lineWidth: dir ? prevState.lineWidth + 1 : prevState.lineWidth - 1,
                direction: dir
            }
        })
    }

    stopDrawing = () => {
        this.setState({
            isDrawing: false
        })
    }

    startDrawing = (e) => {
        const [x, y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
        this.setState({
            isDrawing: true,
            lastX: x,
            lastY: y
        })
    }

    createCanvas = () => {
        const draw = this.drawRef.current;
        const context = draw.getContext('2d');
        context.strokeStyle = "#bada55";
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 5;

        this.setState({
            ctx: context
        })
    }

    componentDidMount() {
        this.createCanvas();
    }

    render() {
        return (
            <canvas
                onMouseOut={this.stopDrawing}
                onMouseDown={this.startDrawing}
                onMouseUp={this.stopDrawing}
                onMouseMove={this.draw}
                ref={this.drawRef}
                width={window.innerWidth}
                height={window.innerHeight}
            ></canvas>
        )
    }
}

export default Canvas;