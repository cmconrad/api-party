import React, { Component } from 'react'
import "./WeatherCity.css"

class WeatherCity extends Component {
    constructor(props){
        super(props)
        
        this.state={
            city:{},
        }

        this.fetchcityData(props)
    }

    fetchcityData(props){
        fetch(`https://api.weather.com/city/${props.match.params.cityname}`)
            .then(data => data.json())
            .then(city => this.setState({city}))
    }

    componentWillRecieveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchcityData(nextProps)
        }
    }

    render(){
        const {city} = this.state
        return (
        <div className="weather-city">
            <h3>followers: {city.followers}</h3>
        </div>
        )
    }
}

export default WeatherCity