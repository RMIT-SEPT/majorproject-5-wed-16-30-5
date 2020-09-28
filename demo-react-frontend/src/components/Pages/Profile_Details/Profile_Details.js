import React, { Component } from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import CreateEditButton from './CreateEditButton'
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import axios from 'axios';
import './Profile_Details.css';
import Header from '../../Layout/Navbar/Navbar';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

// const url = 'http://'+urlAddress.ip+':8080/api/appointment/';
// console.log(urlAddress.ip)

     class Profile_Details extends Component{


        state = {
            customerDetail: '',
    };
   
    componentDidMount(){
        axios.get('http://localhost:8080/api/users/3')

        // axios.get('http://jsonplaceholder.typicode.com/users')
        // axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                console.log(response)
                this.setState({customerDetail: response.data});
            })
            .catch(error =>{
                console.log(error)
            })

    }

  
    render () {
        return (
           
           <Container fluid style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
                 <Sidebar/>
                <div className="body">
                <h1>Profile Details</h1>  
                    <h4>Personal information</h4>
                    <hr></hr>
                    <h6>First name</h6>
                     <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6>
                    <h6>Last name</h6>
                     <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6>
                    <h6>Email</h6>
                     <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6>
                    <h6>Phone number</h6>
                    <h6>Date of birth</h6>
                    <hr></hr>
                    <h4>Personal address</h4>
                    <h6 >Address</h6>
                    <h6>Suburb</h6>
                    <hr></hr>
                     <CreateEditButton/>
                </div>
          </Container>
            
        );
     }
         
       
}
    


     export default Profile_Details;

