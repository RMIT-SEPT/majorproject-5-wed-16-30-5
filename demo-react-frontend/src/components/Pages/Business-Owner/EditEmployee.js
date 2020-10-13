import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import SidebarBusiness from "../../Layout/Sidebar/Sidebar.js";
import * as IoIcons from 'react-icons/io';


class EditEmployee extends Component
{
    constructor(props) {
        super(props)

        this.state = {
    
            id:'',
            name: '',
            job:'',
            workingHours:'',
            businessName:'',
            employeeIdentifier: this.props.match.params.id,

        }
        this.employeeDetailHandler = this.employeeDetailHandler.bind(this);
        this.SaveData = this.SaveData.bind(this);


    }

   
    fetchData() {

        let h = new Headers();

        let email = window.sessionStorage.getItem('email');
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr('keyword');
        let encryptedString = window.sessionStorage.getItem('encrypted');
        const decryptedString = cryptr.decrypt(encryptedString);
        console.log(decryptedString);
        let encoded = window.btoa(email + ':' + decryptedString);
        let auth = 'Basic ' + encoded;
        h.append('Accept', 'application/json');
        h.append('Authorization', auth);

        fetch('/' + this.state.employeeIdentifier, {
            method: 'GET',
            headers: h
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    id: json.id,
                    job: json.job,
                    name: json.name,
                    workingHours: json.workingHours,
                    employeeIdentifier: json.employeeIdentifier,
                    businessName: json.businessName
                   
                 });

            });
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

        fetch('', {
            method: 'post',
            headers: h,
            body: JSON.stringify({
                id: this.state.id,
                job: this.state.job,
                name: this.state.name,
                businessName: this.state.businessName,
                workingHours: this.state.workingHours,
                employeeIdentifier: this.state.employeeIdentifier,
                title: this.state.title
            })
        }).then(json => this.fetchData()).then(console.log(this.state))
    }

    componentDidMount() {
        this.fetchData();
    }

        render(){
               return (
            <>
             <SidebarBusiness/>
              <div style={{ marginLeft: '25%' }}>
              <h1><IoIcons.IoMdPeople /> Edit Employee</h1>
                    <div >
                        <form>
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
        
      export default EditEmployee;
        