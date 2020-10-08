import React, {Component} from "react";
import {Button, Container} from "react-bootstrap";
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import './EmployeesPage.css';
import CreateAddEmployeeButton from './CreateAddEmployeeButton.js';
import SidebarBusiness from "../../Layout/Sidebar/SidebarBusiness.js";
import urlAddress from '../../ip.json';

const url = 'http://'+urlAddress.ip+':8080/api/appointment/';


class EmployeesPage extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
        }
        this.editEmployees = this.editEmployees.bind(this);
    }
    editEmployees(id) {
        this.props.history.push(`/EmployeeList/EditEmployee/${id}`);
    }
    
    fetchData() {
        let email = window.sessionStorage.getItem('email');
        //encrypted password
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr('keyword');
        let encryptedString = window.sessionStorage.getItem('encrypted');
        const decryptedString = cryptr.decrypt(encryptedString);
        console.log(decryptedString);
        let encoded = window.btoa(email + ':' + decryptedString);
        let auth = 'Basic ' + encoded;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Authorization', auth);
        h.append("Access-Control-Allow-Origin", "*")

        fetch(url + 'all', {
            method: 'GET',
            headers: h
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ employees: json });

            })
    }

    delete(id) {
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
        if (window.confirm('Do you want to delete?')) {
            fetch(url+id, {
                method: 'delete',
                headers: h
            })
            .then(json => this.fetchData())
            .then(function (response) {
            console.log('Authenticated')});
        }
    }
    
    // componentDidMount() {
    //     this.fetchData();
    // }


    render() {
        return (  
        <> 
        <SidebarBusiness/>
        <CreateAddEmployeeButton/>
            <div style={{ position: 'fixed',top: 100,left: 402, }} >
                <h1><IoIcons.IoMdPeople /> Employees List</h1>
                <table style={{ width: '700px' }} >
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Job</td>
                            <td> Business Name </td>
                            <td> Working Hours</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                          {this.state.employees.map(emp => 
                             <tr
                                    
                                className='emply'
                                key={emp.employeeIdentifier}
                                 >
                                
                                <td> {emp.employeeName}</td>
                                <td> {emp.employeeDate}</td> 
                                <td className='edtb'> 
                                    <Button
                                        href={`/EmployeeList/EditEmployee/${emp.employeeIdentifier}`}
                                        onClick={() => this.editAppointment(emp.employeeIdentifier)}
                                        style={{ marginRight:'10px' }}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="danger" 
                                    onClick={this.delete.bind(this, emp.employeeIdentifier)}
                                    >
                                    Delete
                                   </Button>
                                 </td>
                            </tr> 
                         )} 
                    </tbody>
                </table>
            </div>        
        </>
            
          );
                          
          
    }
}

         
      export default EmployeesPage;
        


