import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import Sidebar from "../../Layout/Sidebar/Sidebar.js";
import * as IoIcons from 'react-icons/io';
import urlAddress from '../../ip.json';

const url = 'http://'+urlAddress.ip+':8080/api/worker';


class AddEmployee extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            workerIdentifier: "w" + Math.floor(10000 + Math.random() * 9000),
            workerName: '',
            workerAge: '',
            serviceIdentifier:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ workerName: event.target.value });
    }
    changeAgeHandler = (event) => {
        this.setState({ workerAge: event.target.value });
    }
    changeIdHandler = (event) => {
        this.setState({ serviceIdentifier: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    SaveData() {
        let h = new Headers();
        let email = window.sessionStorage.getItem('email');
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr('keyword');
        let encryptedString = window.sessionStorage.getItem('encrypted');
        const decryptedString = cryptr.decrypt(encryptedString);
        console.log(decryptedString);
        let encoded = window.btoa(email + ':' + decryptedString);
        let auth = 'Basic ' + encoded;
        h.append('Content-Type', 'application/json');
        h.append('Accept', 'application/json');
        h.append('Authorization', auth);

        fetch(url, {
            method: 'post',
            headers: h,
            body: JSON.stringify({
                workerIdentifier: this.state.workerIdentifier,
                workerName: this.state.workerName,
                workerAge: this.state.workerAge,
                serviceIdentifier: this.state.serviceIdentifier
            })
        }).then(console.log(this.state))
    }
    componentDidMount() {
        console.log(this.state.workerIdentifier);
    }

    render() {

        return (
            <>
                <Sidebar />
                <div style={{ marginLeft: '25%' }}>
                    <h1><IoIcons.IoIosPaper /> Create a new Employee: </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label> Employee Id: </label>
                            <input type="text" placeholder="workerIdentifier" name="workerIdentifier" className="form-control"
                                value={this.state.workerIdentifier} />
                        </div>
                        <div className="form-group">
                            <label> Name: </label>
                            <input type="text" placeholder="Name" name="workerName" className="form-control"
                                value={this.state.workerName} onChange={this.changeNameHandler} />
                        </div>
                        <div className="form-group">
                            <label> Age: </label>
                            <input placeholder="Age" name="workerAge" className="form-control"
                                value={this.state.workerAge} onChange={this.changeAgeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Service Id: </label>
                            <input placeholder="Service Id" name="workerAge" className="form-control"
                                value={this.state.serviceIdentifier} onChange={this.changeIdHandler} />
                        </div>
                        <Button
                            className="btn btn-success"
                            onClick={this.SaveData.bind(this)}
                            href='/EmployeesPage'
                        >Save</Button>
                    </form>
                </div>
            </>
        )
    }
}

         
      export default AddEmployee;
        