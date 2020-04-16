import React from 'react';
import Navbar from './Navbar'
import ThoughtsList from './ThoughtsList'
import Button from 'react-bootstrap/Button'

import "./styles/Home.css"




class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: null,
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        //get Json data
    }
    

    render() {
        return <React.Fragment>
        <div className="home-header"><span>THOUGHTS</span></div>
            <div className="home-thoughts-container">
                <ThoughtsList/>
            </div>
            <Button className="home-add-thought">ADD A THOUGHT</Button>
            <Navbar/>
        </React.Fragment>
    }
}

export default Home;
