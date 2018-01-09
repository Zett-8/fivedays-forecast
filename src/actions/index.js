import axios from 'axios';

const API_KEY = '&appid=d9a20b6de49c0ac323fe8d4a63483435';
const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

export const FETCH_DATA = 'fetch_data';

export function getCity(city,country) {

    const request = axios.get(`${url}${city},${country}${API_KEY}`).then(res => res)
        .catch(e => {
            if(e) alert(`Sorry, couldn't find a city such as '${city}' in ${country}`);
            return'error'
        });

    return {
        type: FETCH_DATA,
        payload: request,
    }
}

