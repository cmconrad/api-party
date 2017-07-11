import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Starwars.css'
import StarwarsNoun from './StarwarsNoun'

class Starwars extends Component{

    state={
        noun:'',

    }

    handleChange = (ev) => {
        this.setState({noun: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({noun:''})
        this.props.history.push(`/starwars/${this.state.noun}`)   
    }

    render(){
        return (
        <div className="starwars">
            
            <img className="starwars-logo" src="https://vignette2.wikia.nocookie.net/starwars/images/4/42/StarWarsOpeningLogo.svg/revision/latest?cb=20120211213511" alt="logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        className="text"
                        type="text"
                        value={this.state.noun}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="radio-inline">
                    <input type="radio" name="entity" value="Planets"/> Planets
                    <input type="radio" name="entity" value="People"/> People
                    <input type="radio" name="entity" value="Starships"/> Starships
                    <input type="radio" name="entity" value="Vehicles"/> Vehicles
                    <input type="radio" name="entity" value="Species"/> Species
                    <input type="radio" name="entity" value="Films"/> Films
                </div>
                <div>
                    <button>Look up a Star Wars entity.</button>
                </div>
            </form>    
            <Route path="/starwars/:noun" component={StarwarsNoun}/> 
            <Route exact path="/starwars" render={() => <h3>Please enter a valid Star Wars planet.</h3>}/>
        </div>
        )
    }
}

export default Starwars