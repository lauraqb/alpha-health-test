import React from 'react'
import ThoughtCard from './ThoughtCard'
import data from '../resources/thoughts.json'

export class GamesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thoughts: data,
            error: null
        }
    }

    displayThoughtsCards = () => {
        return this.state.thoughts.map((thought, index) => {
            return <ThoughtCard id={index} title={thought.title} description={thought.description} mood={thought.mood}></ThoughtCard>
        })
    }

    render() {
        if(!this.state.thoughts) {
            return <div>This is your thoughts diary</div>
        }
        return <div>
            {this.displayThoughtsCards()} 

        </div>
    }
}

export default GamesList
