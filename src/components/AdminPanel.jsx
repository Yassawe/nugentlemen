import React, { Component } from 'react';
import {Button} from 'reactstrap';
import instance from './secret'

var db = instance.database();

class AdminPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            messages: []
        }

        this.loadMessages = this.loadMessages.bind(this);
        this.showState = this.showState.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.loadMessages);
    }

    loadMessages(){

        db.ref('messages').on('value', snapshot => {

            let data = snapshot.val();
            if(data){
                let keys = Object.keys(data);

                let newState =[];

                for (let i=0; i<keys.length; i++){
                    let k = keys[i]
                    newState.push({
                        id: k,
                        text: data[k].message,
                        timestamp: data[k].timestamp
                    });
                }

                console.log(newState);

                this.setState({
                    messages: newState
                });
            }
            else{
                this.setState({
                    messages:[]
                });
            }

        });

    }

    showState(){
        alert(this.state.messages);
    }

    handleDelete(id){
        db.ref('messages/'+id).remove()
        this.loadMessages()
    }

    render(){

        const suggestions = this.state.messages.map((message) => {
            return (
                <div key={message.id} className="row justify-content-center">
                    <div className="col-8 suggestionbox">
                        <p className="messagetext">{message.text}</p>
                        <p className="timestamp">{message.timestamp}</p>

                        <Button onClick={() => {navigator.clipboard.writeText(message.text)}}>Скопировать</Button>

                        <Button color="danger" onClick={() => {this.handleDelete(message.id)}}>Удалить</Button>

                    </div>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 text-center title">
                        <h1>Записи в предложке:</h1>
                    </div>
                </div>

                {suggestions}
            </div>
        );
    }

}

export default AdminPanel;