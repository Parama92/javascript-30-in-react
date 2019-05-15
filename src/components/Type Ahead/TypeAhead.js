import React from 'react';

import './styles.css';

class TypeAhead extends React.Component {
    render() {
        return (
            <form className="search-form">
                <input type="text" className="search" placeholder="City or State" />
                <ul className="suggestions">
                    <li>Filter for a city</li>
                    <li>or a state</li>
                </ul>
            </form>
        )
    }
}

export default TypeAhead;
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';