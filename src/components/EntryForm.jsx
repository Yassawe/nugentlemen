import React, { Component } from 'react';
import {Form, FormGroup, Button, Input, Col} from 'reactstrap';
import app from './secret.js'

var db = app.database().ref('messages');

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

        var send = db.push();

        if (message!==''){
            send.set(
                {
                    message: message,
                    timestamp: new Date().toString()
                },
                (error) => {
                    if(error){
                        this.buttonChange('Произошла ошибка', 'danger')
                    } else {
                        this.buttonChange('Успешно отправлено', 'success')
                    }
                }
            );
        } else {
            this.buttonChange('Запись пуста', 'warning')
        }
    }

    buttonChange(text, color) {
        this.setState({
            status: text,
            buttonColor: color
        },
        () => {
            setTimeout(() => {
              this.setState({
                status: 'Отправить',
                buttonColor: 'primary'
              });
            }, 1000);
          }
        );
    }

    handleInputChange(event) {
        this.setState({
            message: event.target.value
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <img src="assets/images/banner2.png" alt="banner" className="img-responsive img-fluid" />
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
                            <Button type="submit" color={this.state.buttonColor} className="btn btn-block">{this.state.status}</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );

    }


}

export default EntryForm;