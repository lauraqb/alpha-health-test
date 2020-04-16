import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { FaAngleRight } from "react-icons/fa"
import './styles/ThoughtCard.css'

export class GameCard extends React.Component {
    constructor(props) {
      super(props)
      this.title = this.props.title
      this.description = this.props.description
      this.mood = this.props.mood
      this.link = "./thought/"+this.props.id
    }

    render() {
        return  (
        <Link to={this.link}>
        <Card>
          <Card.Body className="thought-card">
            <div className="thought-card-title">{this.title} </div><div><FaAngleRight/></div>
          </Card.Body>
        </Card>
      </Link>
        )
    }
}

export default GameCard