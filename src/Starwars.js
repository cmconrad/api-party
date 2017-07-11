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
        this.props.history.push(`/starwars/planets/?search=${this.state.noun}`)   
    }

    render(){
        return (
        <div className="starwars">
            
            <img className="starwars-logo" src="https://vignette2.wikia.nocookie.net/starwars/images/4/42/StarWarsOpeningLogo.svg/revision/latest?cb=20120211213511" alt="logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text"
                        value={this.state.noun}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button>Look up a Star Wars entity.</button>
                </div>
            </form>    
            <Route exact path="/starwars" render={() => <h3>Please enter a valid Star Wars person, planet, or starship.</h3>}/>
            <Route path="/starwars/planets/?search=:noun" component={StarwarsNoun}/>  
        </div>
        )
    }
}

export default Starwars