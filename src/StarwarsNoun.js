import React, { Component } from 'react'
import "./StarwarsNoun.css"

class StarwarsNoun extends Component {
    constructor(props){
        super(props)
        
        this.state={
            noun:{},
        }

        this.fetchNounData(props)
    }

    fetchNounData(props){
        console.log(props.match.params.noun)
        fetch(`http://swapi.co/api/planets/?search=${props.match.params.noun}`)
            .then(data => data.json())
            .then(noun => this.setState({noun}))
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchNounData(nextProps)
        }
    }

    render(){
        return (
        <div className="starwars-noun">
            <h3>climate: {this.state.noun.results}</h3>
        </div>
        )
    }
}

export default StarwarsNoun
