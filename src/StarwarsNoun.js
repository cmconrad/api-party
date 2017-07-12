import React, { Component } from 'react'
import "./StarwarsNoun.css"

class StarwarsNoun extends Component {
    constructor(props){
        super(props)
        
        this.state={
            noun:'',
            results:{}
        }

        this.fetchNounData(props)
    }

    fetchNounData(props){
        console.log(props.button)
        fetch(`http://swapi.co/api/${this.props.button}/?search=${props.match.params.noun}`)
            .then(data => data.json())
            .then(results => { this.setState({results: results.results[0]})
            })
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchNounData(nextProps)
        }
    }

    render(){
        const r = this.state.results
            if (this.props.button === "planets"){
                return (
                <div className="starwars-noun">
                    <h1>{r.name}</h1>
                    <h2>Terrain: {r.terrain}</h2>
                    <h2>Rotation Period (hours): {r.rotation_period}</h2>
                    <h2>Orbital Period (days): {r.orbital_period}</h2>
                    <h2>Diameter (km): {r.diameter}</h2>
                    <h2>Climate: {r.climate}</h2>
                    <h2>Surface Water (%): {r.surface_water}</h2>
                    <h2>Population: {r.population}</h2>
                </div>
                )
            }
            if (this.props.button === "people"){
                return(
                    <div className="starwars-noun">
                        <h1>{r.name}</h1>
                        <h2>Height (cm): {r.height}</h2>
                        <h2>Mass (kg): {r.mass}</h2>
                        <h2>Hair Color: {r.hair_color}</h2>
                        <h2>Skin Color: {r.skin_color}</h2>
                        <h2>Birth Year: {r.birth_year}</h2>
                        <h2>Gender: {r.gender}</h2>
                        <h2>Homeworld: {r.homeworld}</h2>
                    </div>
                )
            }
            if (this.props.button === "starships"){
                return(
                    <div className="starwars-noun">
                        <h1>{r.name}</h1>
                        <h2>Height (cm): {r.height}</h2>
                        <h2>Mass (kg): {r.mass}</h2>
                        <h2>Hair Color: {r.hair_color}</h2>
                        <h2>Skin Color: {r.skin_color}</h2>
                        <h2>Birth Year: {r.birth_year}</h2>
                        <h2>Gender: {r.gender}</h2>
                        {/* <h2>Homeworld: {r.homeworld}</h2>} */}
                    </div>
                )
            }
            if (this.props.button === "vehicles"){
                return(
                    <div className="starwars-noun">
                        <h1>{r.name}</h1>
                        <h2>Height (cm): {r.height}</h2>
                        <h2>Mass (kg): {r.mass}</h2>
                        <h2>Hair Color: {r.hair_color}</h2>
                        <h2>Skin Color: {r.skin_color}</h2>
                        <h2>Birth Year: {r.birth_year}</h2>
                        <h2>Gender: {r.gender}</h2>
                        <h2>Homeworld: {r.homeworld}</h2>
                    </div>
                )
            }
            
    }
}

export default StarwarsNoun
