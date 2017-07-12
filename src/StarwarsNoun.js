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
            .then(console.log(this.state.noun))
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchNounData(nextProps)
        }
    }

    render(){
        const { noun } = this.state.noun
        return (
        <div className="starwars-noun">
            <h3>climate: </h3>
        </div>
        )
    }
}

export default StarwarsNoun
