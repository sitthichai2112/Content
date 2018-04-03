import React, { Component } from 'react';
import {ControlLabel} from "react-bootstrap";
import {Table, Button, Modal, Col, Popover, Tooltip, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class Modal extends Component {
    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Title
                            </Col>
                            <Col sm={10}>
                                <FormControl name='title' type="text" placeholder="Title"
                                             onChange={this.handleChange}
                                             value='1'
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={10}>
                                <FormControl name='description' type="text" placeholder="Description"
                                             onChange={this.handleChange} value='2'/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.submit}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Modal;
