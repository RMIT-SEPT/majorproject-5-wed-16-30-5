import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import SidebarBusiness from "../../Layout/Sidebar/SidebarBusiness.js";
import * as IoIcons from 'react-icons/io';
import urlAddress from '../../ip.json';

const url = 'http://'+urlAddress.ip+':8080/api/appointment/';


class AddEmployee extends Component
{
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            job:'',
            workingHours:'',
            businessName:'',
            employeeIdentifier: Math.floor(10000 + Math.random() * 90000),

        }
        this.employeeDetailHandler = this.employeeDetailHandler.bind(this);
        this.SaveData = this.SaveData.bind(this);

    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
    }

    employeeDetailHandler(event){
        this.setState({[event.target.name]: event.target.value});
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
                job: this.state.job,
                name: this.state.name,
                businessName: this.state.businessName,
                workingHours: this.state.workingHours,
                employeeIdentifier: this.employeeIdentifier
            })
        }).then(console.log(this.state))
    }
    componentDidMount() {
        console.log(this.state.employeeIdentifier);
    }

        render(){
               return (
            <>
             <SidebarBusiness/>
              <div style={{ marginLeft: '25%' }}>
              <h1><IoIcons.IoMdPeople /> Add Employee</h1>
                    <div >
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label> Employee name: </label>
                                <input type="text" placeholder="Name" name="name" className="form-control"
                                    value={this.state.name} onChange={this.employeeDetailHandler}
                                />
                                <label>Business Name: </label>
                                <input type="text" placeholder="BusinessName" name="businessName" className="form-control"
                                    value={this.state.businessName} onChange={this.employeeDetailHandler}
                                />
                                <label>Job: </label>
                                <input type="text" placeholder="JobName" name="job" className="form-control"
                                    value={this.state.job} onChange={this.employeeDetailHandler}
                                />
                                <label>Working Hours: </label>
                                <input type="time"  name="workingHours" className="form-control"
                                    value={this.state.workingHours} onChange={this.employeeDetailHandler}
                                />
                                
                            </div>
                            <Button
                                className="btn btn-success"
                                onClick={this.SaveData.bind(this)}
                                href='/EmployeesPage'                 
                                >
                                Save
                            </Button>
                        </form>
                   </div>
                </div>
            </>
       
                 
               );
               
           }
}

         
      export default AddEmployee;
        