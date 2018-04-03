import React, {Component} from 'react';
import '../../App.css';
import {Table, Button, Modal, Col, Popover, Tooltip, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getList, addContent, updateContent, deleteContent} from '../../redux/content/action'

class Content extends Component {


    constructor(props, context) {
        super(props, context);

        //  this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            content: {
                id: 0,
                title: '',
                description: ''
            },
            status: ''

        };
    }

    handleClose = () => {
        this.setState({
            show: false,
            content: {
                id: 0,
                title: '',
                description: ''
            },
        });
    }

    handleShow = () => {
        this.setState({show: true});
    }


    componentDidMount() {
        this.props.getList()
    }


    listContent() {
        const {content} = this.props
        const list = content.list
        return list.map((data, index) =>
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td className='text-tr'><Button bsStyle="primary"
                                                onClick={() => this.openModalUpdate(data)}>Update</Button></td>
                <td className='text-tr'><Button bsStyle="danger" onClick={() => this.delete(data.id)}>Delete</Button>
                </td>
            </tr>
        )
    }


    delete = (id) => {
        this.props.deleteContent(id, () => {
            this.props.getList()
        })
    }

    handleChange = (e) => {

        this.setState({
            content: {
                ...this.state.content,
                [e.target.name]: e.target.value
            }
        })
    }


    submit = () => {

        if (this.state.content.id !== 0) {
            this.props.updateContent(this.state.content, () => {
                this.handleClose()
                this.props.getList()

            })
        } else {
            this.props.addContent(this.state.content, () => {
                this.handleClose()
                this.props.getList()

            })
        }

    }


    openModalUpdate = (content) => {
        this.setState({show: true, content});

    }

    render() {

        return (
            <div>
                <div className='button-add'>
                    <Button bsStyle="primary" onClick={this.handleShow}>Add</Button>
                </div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th className='text-tr'>id</th>
                        <th className='text-tr'>Title</th>
                        <th className='text-tr'>Description</th>
                        <th className='text-tr'>Update</th>
                        <th className='text-tr'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.listContent()}
                    </tbody>
                </Table>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.content.id === 0 ? 'Add':'Update'}</Modal.Title>
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
                                                 value={this.state.content.title}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Description
                                </Col>
                                <Col sm={10}>
                                    <FormControl name='description' type="text" placeholder="Description"
                                                 onChange={this.handleChange}
                                                 value={this.state.content.description}
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.submit}>Add</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        content: state.content
    }
}


export default connect(MapStateToProps, (null, dispatch => bindActionCreators({
    getList,
    addContent,
    updateContent,
    deleteContent
}, dispatch)))(Content)
