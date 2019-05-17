import React from 'react';

class MatchedCities extends React.Component {
    render() {
        const listComponent = this.props.list.length ?
            this.props.list.map(item => {
                const exp = new RegExp(this.props.input, 'gi');
                const cityName = [].concat(item.city.split(exp));
                const stateName = [].concat(item.state.replace(exp));
                return (<li key={`${item.city}, ${item.state}`}>
                    <span className='name'>
                        {cityName[0]}
                        <span className='hl'>{this.props.input}</span>
                        {cityName[1] || ''},&nbsp;
                        {stateName[0]}
                        <span className='hl'>{this.props.input}</span>
                        {stateName[1] || ''}
                    </span>
                    <span className='population'>{item.population}</span>
                </li>)
            })
            :
            (<React.Fragment>
                <li>Filter for a city</li>
                <li>or a state</li>
            </React.Fragment>)
        return (
            <React.Fragment>
                {listComponent}
            </React.Fragment>
        )
    }
}

export default MatchedCities;