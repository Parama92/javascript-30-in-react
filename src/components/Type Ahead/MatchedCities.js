import React from 'react';

class MatchedCities extends React.Component {
    displayPlace = placeName => {
        return placeName.map((chunk, i) => (
            <React.Fragment key={placeName + chunk}>
                {chunk}{i === placeName.length - 1 ? '' : <span className='hl'>{this.props.input}</span>}
            </React.Fragment>
        ));
    }
    render() {
        const listComponent = this.props.list.length ?
            this.props.list.map(item => {
                const exp = new RegExp(this.props.input, 'gi');
                const cityName = [].concat(item.city.split(exp));
                const stateName = [].concat(item.state.split(exp));
                return (<li key={`${item.city}, ${item.state}`}>
                    <span className='name'>
                        {this.displayPlace(cityName)},&nbsp;
                        {this.displayPlace(stateName)}
                    </span>
                    <span className='population'>{`${item.population.toLocaleString()}`}</span>
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