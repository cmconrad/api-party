import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import "./Weather.css"
import WeatherCity from './WeatherCity'

class Weather extends Component {
    state={
        city:'',

    }

    handleChange = (ev) => {
        this.setState({city: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({city:''})
        this.props.history.push(`/weather/${this.state.city}`)   
    }

    render(){
        return (
        <div className="weather">
            
            <img className="weather-logo" src="https://icons.wxug.com/i/c/v4/chancetstorms.svg" alt="logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button>Look up city's weather</button>
                </div>
            </form>    
            <Route exact path="/weather" render={() => <h3>Please enter a city to find its weather</h3>}/>
            <Route path="/weather/:city" component={WeatherCity} />
        </div>
        )
    }
}

export default Weather