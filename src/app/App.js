import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import GoButton from '../buttons/GoButton';
import Input from '../fields/Input';
import TableData from '../TableData/TableData';
import axios from 'axios';

class App extends Component {

    constructor() {
        super();
        this.state = {
        data: 
        [
            {
                "id":1,
                "item":"default item1"
            },
            {
                "id":2,
                "item":"default item2"
            },
            {
                "id":3,
                "item":"default item3"
            }
        ]
        }
        this.inputValue = "";
        this.showValueData=this.showValueData.bind(this);
        this.addButtonClicked=this.addButtonClicked.bind(this);
        this.deleteField=this.deleteField.bind(this);

        // Creating ref for Input class
        this.inputChild = React.createRef();
    }
    showValueData(value) {
        this.setState({inputValue: value.target.value});
    }

    addButtonClicked() {
        const dateTime = new Date().getTime();
        const timestamp = Math.floor(dateTime / 1000);

        if(this.state.inputValue === undefined || this.state.inputValue === null || this.state.inputValue == ""){
            return false;
        }


        var obj = {
            "id":timestamp,
            "item":this.state.inputValue
        }
        console.log(obj);


        // fetch('http://localhost:8080/list/addItem', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(obj)
        // })

        axios.post('http://localhost:8080/list/addItem', obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


        this.state.data.push(obj);

        // Calling input class clearInput function to clear the field
        this.inputChild.current.clearInput();
        this.setState({inputValue: ""});
        this.forceUpdate();
    }
  
    deleteField(id) {
        for (let index = 0; index < this.state.data.length; index++) {
            const element = this.state.data[index];
            if(element.id == id){
                this.state.data.splice(index, 1);
            }
        }
        this.forceUpdate();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                Todo List
                </p>
                <Input stateData = {this.state} inputValue = {this.inputValue} showValueData = {this.showValueData}  ref={this.inputChild}/>  
                <GoButton stateData = {this.state} addButtonClicked = {this.addButtonClicked}/>
                <TableData  stateData = {this.state} deleteField = {this.deleteField}/>
            </div>
        );
    }
}

export default App;
