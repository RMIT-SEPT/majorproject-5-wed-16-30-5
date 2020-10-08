import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import './EmployeesPage.css';




class CreateAddEmployeeButton extends Component
{
    
        render(){
               return (   
                  <>
                    <Button
                        id="btnEmpAdd" type="Button" value="Add"
                        style={{ 
                           position: 'fixed',top: 110,
                           left: 1100, 
                        }}  
                        className="btn btn-success"
                        href="/EmployeeList/AddEmployee">
                       Add Employee
                    </Button>
                 </>
                 
               );
               
           }
}

         
      export default CreateAddEmployeeButton;
        