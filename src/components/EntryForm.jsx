import React, { Component } from 'react';
import {Form, FormGroup, Button, Input, Col} from 'reactstrap';

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            message: '',
            status: 'Отправить',
            buttonColor: 'primary'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();    
        const message = this.state.message;
        
        this.setState({
            message:'',
        });
        
    }

    handleInputChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    render(){
        return(
            <div class="container">
                <div className="row justify-content-center">
                    <img src="assets/images/banner2.png" alt="banner" class="img-responsive img-fluid" />
                </div>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row className="justify-content-center">
                        <Col md={8} xs={12}>
                            <Input type="textarea" id="entry" name="message" className="messageBox" placeholder="БПС, ..." rows="12" value={this.state.message}
                            onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="justify-content-center">
                        <Col md={8} xs={12}>
                            <Button type="submit" color={this.state.buttonColor} className="btn-block">{this.state.status}</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );

    }


}

export default EntryForm;