import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Starwars.css'
import StarwarsNoun from './StarwarsNoun'

class Starwars extends Component{

    state={
        noun:'',
        button:''
    }

    handleChange = (ev) => {
        this.setState({noun: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({noun:''})
        this.setState({button: document.querySelector('input[name = "entity"]:checked').value})
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
                    <input type="radio" name="entity" value="planets"/> Planets
                    <input type="radio" name="entity" value="people"/> People
                    <input type="radio" name="entity" value="starships"/> Starships
                    <input type="radio" name="entity" value="vehicles"/> Vehicles
                    <input type="radio" name="entity" value="species"/> Species
                    <input type="radio" name="entity" value="films"/> Films
                </div>
                <div>
                    <button>Look up a Star Wars entity.</button>
                </div>
            </form>    
            <Route path="/starwars/:noun" render={(props) => 
                <StarwarsNoun
                    button={this.state.button}
                />}
            />
            <Route exact path="/starwars" render={() => <h3>Please enter a valid Star Wars entity.</h3>}/>
        </div>
        )
    }
}

export default Starwars