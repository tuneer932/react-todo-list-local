import React, { Component } from 'react';
import './TableData.css';
import TableRows from '../TableRows/TableRows';

class TableData extends Component {
    
    deleteField = (id) => {
        this.props.deleteField(id);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.stateData.data.map((todoitem, i) => <TableRows key = {i} 
                          data = {todoitem} deleteField = {this.deleteField} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;
