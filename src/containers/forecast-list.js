import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class ForecastList extends React.Component{
    renderList(){
        return this.props.weathers.map((value, index) => {
            const temps = value.list.map(value => value.main.temp);
            const pressures = value.list.map(value => value.main.pressure);
            const humidities = value.list.map(value => value.main.humidity);
            const aveTemp = Math.round((temps.reduce((pre,cur) => pre+cur)) / value.list.length);

            return (
                <tr key={value.city.name + index}>
                    <td id='cityName'>{value.city.name}, {value.city.country}</td>
                    <td>
                        <Chart data={temps} color='orange'/>
                        ave. { aveTemp }K / {Math.round(aveTemp - 273.15)} ℃</td>
                    <td><Chart data={pressures} color='blue'/>ave. {Math.round((pressures.reduce((pre,cur) => pre+cur)) / value.list.length)} hPa</td>
                    <td><Chart data={humidities} color='black'/>ave. {Math.round((humidities.reduce((pre,cur) => pre+cur)) / value.list.length)} %</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope='col'>City</th>
                            <th scope='col'>Temperature (K, ℃)</th>
                            <th scope='col'>Pressure (hPa)</th>
                            <th scope='col'>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps(weathers){
    return ({weathers});
}

export default connect(mapStateToProps, null)(ForecastList);