import React from 'react';

import './styles.css';

class TypeAhead extends React.Component {
    state = {
        cities: [],
        input: ''
    }
    componentDidMount() {
        fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    cities: [...data]
                });
            })
            .catch(e => {
                console.log(e)
            })
    }
    handleChange = event => {
        const searchString = event.target.value;
        const matches = this.state.cities.filter(place => {
            const exp = new RegExp(searchString, 'gi');
            return place.city.match(exp) || place.state.match(exp);
        })
        console.log(matches);
    }
    render() {
        return (
            <form className="search-form">
                <input onChange={this.handleChange} type="text" className="search" placeholder="City or State" />
                <ul className="suggestions">
                    <li>Filter for a city</li>
                    <li>or a state</li>
                </ul>
            </form>
        )
    }
}

export default TypeAhead;