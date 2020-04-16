import React from 'react';
import Navbar from './Navbar'
import ThoughtsList from './ThoughtsList'
import AddThoughtModal from './AddThoughtModal'
import Button from 'react-bootstrap/Button'

import "./styles/Home.css"




class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal(e) {
        this.setState({showModal: true})
    }
    hideModal(e) {
        this.setState({showModal: false})
    }

    render() {
        return <React.Fragment>
        <div className="home-header"><span>THOUGHTS</span></div>
            <div className="home-thoughts-container">
                <ThoughtsList/>
            </div>
            <Button onClick={this.showModal} className="home-add-thought">ADD A THOUGHT</Button>
            <AddThoughtModal show={this.state.showModal} hideModal={this.hideModal}/>
            <Navbar/>
        </React.Fragment>
    }
}

export default Home;
