import React, { Component } from 'react';
import './GoButton.css';

class GoButton extends Component {

    render() {
        return (
          <div>
              <button className='go-button' onClick = {this.props.addButtonClicked}>
                <b>
                  Add
                </b>
              </button>
          </div>
        );
    }
}

export default GoButton;
