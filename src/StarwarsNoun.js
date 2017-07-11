import React, { Component } from 'react'
import "./StarwarsNoun.css"

class StarwarsNoun extends Component {
    constructor(props){
        super(props)
        
        this.state={
            noun:{},
        }

        this.fetchnounData(props)
    }

    fetchnounData(props){
        fetch(`http://swapi.co/api/planets/?search=${props.match.params.noun}`)
            .then(data => data.json())
            .then(noun => this.setState({noun}))
    }

    componentWillRecieveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchnounData(nextProps)
        }
    }

    render(){
        const {noun} = this.state
        console.log("Noun was rendered")
        return (
        <div className="starwars-noun">
            <h3>climate: {noun.count}</h3>
        </div>
        )
    }
}

export default StarwarsNoun
