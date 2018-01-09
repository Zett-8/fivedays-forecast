import React from 'react';
import { getCity } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            country: 'us',
        }
    }

    inputChange(term){
        this.setState({term});
    }

    countryChange(country){
        this.setState({country});
    }

    render() {
        return (
            <form className="input-group row"
                  style={{margin: 0}}
                onSubmit={e => {
                    e.preventDefault();
                    if (this.state.term) {
                        this.props.getCity(this.state.term, this.state.country);
                        this.setState({term: ''});
                    }
                }}
            >
                <input type="text" className="form-control col" placeholder="Type a city name and choose a country"
                       value={this.state.term} onChange={(e) => this.inputChange(e.target.value)}
                />
                <select className="custom-select" id="inputGroupSelect04" onChange={e => this.countryChange(e.target.value)}>
                    <option defaultValue='us'>in U.S.A</option>
                    <option value="uk">in U.K</option>
                    <option value="jp">in Japan</option>
                    <option value="sk">in Slovakia</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">submit</button>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCity}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);

