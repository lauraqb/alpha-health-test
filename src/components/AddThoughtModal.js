import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class MyModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(e) {
        this.props.hideModal()
    }
    render() {
        if(!this.props.show){
            return null;
        }
      return (
        <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>ADD A THOUGHT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What is going through your head right now?</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Is there any evidence your thought is true?</Form.Label>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
            
            
            </Modal.Body>
        
        <Modal.Footer>

          <Button variant="primary" onClick={this.handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }
  }