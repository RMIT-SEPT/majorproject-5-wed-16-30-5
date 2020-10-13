import React, { Component } from 'react'
import './Services.css';
import { Button } from "react-bootstrap";
import * as IoIcons from 'react-icons/io';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import urlAddress from '../../ip.json';

const url = 'http://'+urlAddress.ip+':8080/api/appointment/';

class CreateAppo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointmentIdentifier: Math.floor(10000 + Math.random() * 90000),
            serviceIdentifier: this.props.match.params.id,
            workerIdentifier:'',
            appointmentName: '',
            description: '',
            appointmentDate: '',
            appointmentTime:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDesHandler = this.changeDesHandler.bind(this);
        this.changeTimeHandler = this.changeTimeHandler.bind(this);
        this.changeWorkerHandler = this.changeWorkerHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ appointmentName: event.target.value });
    }
    changeDesHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeDateHandler = (event) => {
        this.setState({ appointmentDate: event.target.value });
    }
    changeTimeHandler = (event) => {
        this.setState({ appointmentTime: event.target.value });
    }
    changeWorkerHandler = (event) => {
        this.setState({ workerIdentifier: event.target.value });
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
                appointmentIdentifier: this.state.appointmentIdentifier,
                appointmentDate: this.state.appointmentDate,
                appointmentName: this.state.appointmentName,
                description: this.state.description,
                appointmentTime: this.state.appointmentTime,
                workerIdentifier: this.state.workerIdentifier
            })
        }).then(console.log(this.state))
    }
    componentDidMount() {
        console.log(this.state.appointmentIdentifier);
        console.log(this.state.serviceIdentifier)
    }

    render() {

        return (
            <>
                <Sidebar />
                <h1 style={{ marginLeft: '25%' }}><IoIcons.IoIosPaper /> Book an Appointment: </h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group" style={{float:'left', marginRight:'10px'}}>
                            <label> Appointment Id: </label>
                            <input type="text" placeholder="appointmentIdentifier" name="appointmentIdentifier" className="form-control"
                                value={this.state.appointmentIdentifier}/>
                        </div>
                        <div className="form-group">
                            <label> Service Id: </label>
                            <input type="text" placeholder="serviceIdentifier" name="serviceIdentifier" className="form-control"
                                value={this.state.serviceIdentifier} />
                        </div>
                        <div className="form-group" style={{ float: 'left', marginRight: '10px' }}>
                            <label> Name: </label>
                            <input type="text" placeholder="Name" name="appointmentName" className="form-control"
                                value={this.state.appointmentName} onChange={this.changeNameHandler} />
                        </div>
                        <div className="form-group">
                            <label> Description: </label>
                            <input placeholder="Description" name="Description" className="form-control"
                                value={this.state.description} onChange={this.changeDesHandler} />
                        </div>
                        <div className="form-group" style={{ float: 'left', marginRight: '10px' }}>
                            <label> Date: </label>
                            <input type='date' placeholder="Date" name="Date" className="form-control"
                                value={this.state.appointmentDate} onChange={this.changeDateHandler} />
                        </div>
                        <div className="form-group">
                            <label> Time: </label>
                            <input type='time' placeholder="Date" name="Date" className="form-control"
                                value={this.state.appointmentTime} onChange={this.changeTimeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Employee: </label>
                            <input type='text' placeholder="Date" name="Date" className="form-control"
                                value={this.state.workerIdentifier} onChange={this.changeWorkerHandler} />
                        </div>
                        <Button
                            className="btn btn-success"
                            onClick={this.SaveData.bind(this)}
                            href='/UserAppo'
                            >Save</Button>
                    </form>
                </div>
            </>
        )
    }
}

export default CreateAppo