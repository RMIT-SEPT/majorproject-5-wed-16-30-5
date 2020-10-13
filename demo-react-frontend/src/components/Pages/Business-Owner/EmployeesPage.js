import React, {Component} from "react";
import * as IoIcons from 'react-icons/io';
import './EmployeesPage.css';
import CreateAddEmployeeButton from './CreateAddEmployeeButton.js';
import SidebarBusiness from "../../Layout/Sidebar/Sidebar.js";

class EmployeesPage extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            employees: [
            {
                employeeName:'Alex',
                employeeJob:'Manager',
                businessName:'RMIT connect',
                employeeDate:'8:00 - 18:00',
            },
            {
                employeeName: 'Selina',
                employeeJob: 'Part time',
                businessName: 'RMIT connect',
                employeeDate: '17:50',
            },
            {
                employeeName: 'Matt',
                employeeJob: 'Part time',
                businessName: 'RMIT connect',
                employeeDate: '17:50',
            },
            {
                employeeName: 'Luke',
                employeeJob: 'Secretary',
                businessName: 'RMIT connect',
                employeeDate: '17:50',
            }
            ],
        }
    }

    render() {
        return (  
        <> 
        <SidebarBusiness/>
        <CreateAddEmployeeButton/>
            <div style={{ marginLeft:'25%' }} >
                <h1><IoIcons.IoMdPeople /> Employees List</h1>
                <table style={{ width: '700px' }} >
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Job</td>
                            <td> Business Name </td>
                            <td> Working Hours</td>
                        </tr>
                    </thead>
                    <tbody>
                          {this.state.employees.map((emp, index) => 
                             <tr
                                className='emply'
                                key={index}
                                 >
                                <td> {emp.employeeName}</td>
                                <td> {emp.employeeJob}</td>
                                <td> {emp.businessName}</td>
                                <td> {emp.employeeDate}</td> 
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
        


