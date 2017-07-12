import React, { Component } from 'react'
import "./WeatherCity.css"
import APPID from './APPID'

class WeatherCity extends Component {
    constructor(props){
        super(props)
        
        this.state={
            city:{},
        }

        this.fetchCityData(props)
    }

    fetchCityData(props){
        console.log(props.match.params.city)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.city}&APPID=${APPID}`)
            .then(data => data.json())
            .then(city => this.setState({city}))
            .then(console.log(this.state.city))
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchCityData(nextProps)
        }
    }

    render(){
        const {city} = this.state.city
        return (
        <div className="weather-city">
            <h3>todo:</h3>
        </div>
        )
    }
}

export default WeatherCity