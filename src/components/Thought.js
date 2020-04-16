//page
import React from 'react';
import data from '../resources/thoughts.json'
import { FaAngleLeft } from "react-icons/fa"

import "./styles/Thought.css"


class Thought extends React.Component {

    constructor(props) {
        super(props)
        this.thought = data[this.props.match.params.id]
        this.title = this.thought.title
        this.description = this.thought.description
        this.mood = this.thought.mood
        this.goBack = this.goBack.bind(this)
    }

    goBack(e) {
        this.props.history.push('/')
    }
    

    render() {
        return <React.Fragment>
            <div className="thought-container">
                <div className="thought-header">
                    <div onClick={this.goBack} className="thought-go-back"><FaAngleLeft/></div>
                    <div className="thought-title">{this.title}</div>
                </div>
                <div className="thought-description">{this.description}</div>
        </div>

        </React.Fragment>
    }
}

export default Thought;
