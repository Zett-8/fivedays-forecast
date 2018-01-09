import React from 'react';
import SearchBar from '../containers/searchBar';
import ForecastList from '../containers/forecast-list';

export default function (){
    return (
        <div className='container'>
            <h1>Five days Forecast</h1>
            <SearchBar />
            <ForecastList />
        </div>
    );
}