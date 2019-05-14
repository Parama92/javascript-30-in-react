import React from 'react';

class Panel extends React.Component {
    state = {
        class: `panel panel${this.props.id}`
    }
    handleClick = event => {
        if (this.state.class.includes('open')) {
            this.setState(prevState => {
                return {
                    class: prevState.class.replace("open", '')
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    class: prevState.class += ' open'
                }
            })
        }
    }
    handleTransitionEnd = event => {
        if (event.propertyName.includes('flex')) {
            if (this.state.class.includes('open-active')) {
                this.setState(prevState => {
                    return {
                        class: prevState.class.replace("open-active", '')
                    }
                })
            }
            else {
                this.setState(prevState => {
                    return {
                        class: prevState.class += ' open-active'
                    }
                })
            }
        }
    }
    render() {
        return (
            <div className={this.state.class} onClick={this.handleClick} onTransitionEnd={this.handleTransitionEnd}>
                {this.props.text.split(' ').map(p => <p key={p}>{p}</p>)}
            </div>
        )
    }
}

export default Panel;