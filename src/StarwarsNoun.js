import React, { Component } from 'react'
import "./StarwarsNoun.css"

class StarwarsNoun extends Component {
    constructor(props){
        super(props)
        
        this.state={
            name:{},
        }

        this.fetchNameData(props)
    }
    
    fetchNameData(props){
        fetch(`https://swapi.co/api/planets/${props.match.params.name}`)
            .then(data => data.json())
            .then(name => this.setState({name}))
    }

    componentWillRecieveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){   
            this.fetchNameData(nextProps)
        }
    }

    render(){
        const {name} = this.state
        return (
        <div className="starwars-name">
            <h3>name: {name.name}</h3>
        </div>
        )
    }
}

export default StarwarsNoun
