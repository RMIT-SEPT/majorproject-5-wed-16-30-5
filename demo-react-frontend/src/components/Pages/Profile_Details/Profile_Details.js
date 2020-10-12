import React, { Component } from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import DeleteAccount from './DeleteAccount';
import CreateEditButton from './CreateEditButton'
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import axios from 'axios';
import urlAddress from "../../ip.json";
import './Profile_Details.css';


const url = 'http://'+urlAddress.ip+':8080/api/';
console.log(urlAddress.ip);

     class Profile_Details extends Component{
        constructor(props) {
            super(props)
        this.state = {
            id:this.props.match.params.id,
            customerDetail: [],
            errorMsg:'',

        }
      
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(url + `users/11`)
            .then(response =>{
                console.log(response)
                this.setState({
                    id: response.data,
                    customerDetail: response.data
                });
            })
            .catch(error =>{
                console.log(error);
                this.setState({errorMsg: 'Cannot get the profile details' })
            })

    }

  
    render () {
        const { customerDetail, errorMsg} = this.state

        return (      
           <Container fluid style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
            <Sidebar/>
            <div className="body">
                <h1>Profile Details</h1>  
                    <h4>Personal information</h4>
                    <hr></hr>
                    <h6>User name </h6>

                    {/* <ul>
                     {this.state.customerDetail.map(detail =>(
                          <h6 key={detail.id}>{detail.username} </h6>
                     ))}
                   </ul> */}

                     <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6> 
                    <h6>Last name</h6> 
                     {/* <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6>
                    <h6>Email</h6>
                     <h6 key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6> */}
                    <h6>Phone number</h6>
                    <h6>Date of birth</h6>
                    <hr></hr>
                    <h4>Personal address</h4>
                    <h6 >Address</h6>
                    <h6>Suburb</h6>
                    <hr></hr>
                <CreateEditButton/> 
                <DeleteAccount/>
             </div> 
          </Container>
            
        );
     }
         
       
}
    


     export default Profile_Details;

