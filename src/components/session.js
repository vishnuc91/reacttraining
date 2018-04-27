import React, { Component } from 'react';
import App from '../App';
import Form from './form'

export default class Session extends Component {

    

    render() {
        return (
            <div className="indexPage">
                <App />
                <h1>Create Sessions</h1>
                <Form />
            </div>
        )
    }
}