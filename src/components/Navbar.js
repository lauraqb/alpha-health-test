import React from "react"
import Navbar from 'react-bootstrap/Navbar'

import "./styles/Navbar.css"

class MyNavbar extends React.Component {

    constructor(props) {
      super(props)
    }
    
  
    render() {
      return (
        <Navbar variant="light" bg="light" className="n-navbar" fixed="bottom">
            <div>program</div>
            <div>messages</div>
            <div>thoughts</div>  
            
        </Navbar>
      )
    }
  }
  
  export default MyNavbar