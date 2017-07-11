import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Starwars.css'

class Starwars extends Component{
    render(){
        return (
        <div className="starwars">
            
            <img className="starwars-logo" src="https://vignette2.wikia.nocookie.net/starwars/images/4/42/StarWarsOpeningLogo.svg/revision/latest?cb=20120211213511" alt="logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text" 
                    />
                </div>
                <div>
                    <button>Look up a Star Wars entity.</button>
                </div>
            </form>    
            <Route exact path="/starwars" render={() => <h3>Please enter a valid Star Wars person, planet, or starship.</h3>}/>
            <Route path="/starwars/:username" />  
        </div>
        )
    }
}

export default Starwars