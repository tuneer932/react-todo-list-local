import React, { Component } from 'react';
import './TableRows.css';

class TableRows extends Component {

    render () {
        return (
            <tr>
                <td><button onClick={() => this.props.deleteField(this.props.data.id)}>Delete</button></td><td>{this.props.data.item}</td>
            </tr>
        );
    }
}

export default TableRows;
