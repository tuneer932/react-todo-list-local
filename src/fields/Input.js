import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    // Function to clear the value of input field on add button click
    clearInput() {
        this.refs.inputField.value = "";
    }
    render() {
        return (
            <div>
                <input className="input-field" type="text" onKeyUp={evt => this.props.showValueData(evt)} ref="inputField"/>
            </div>
        );
    }
}

export default Input;
