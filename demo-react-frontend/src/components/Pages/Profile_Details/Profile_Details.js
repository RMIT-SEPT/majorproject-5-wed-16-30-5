import React, { Component } from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import DeleteAccount from './DeleteAccount';
import CreateEditButton from './CreateEditButton'
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import axios from 'axios';
import urlAddress from "../../ip.json";
import './Profile_Details.css';
import jwt_decode from "jwt-decode";



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
        const cu_id = this.props.match.params.id;
        axios.get(url + `users/1`)
        // axios.get(url + `users/${cu_id}`)
            .then(response =>{
                console.log(response);

                // window.sessionStorage.setItem("token", response.data.token);
                // window.sessionStorage.setItem("id", encryptedId);
                // const decodedId =  jwt_decode(token);
                // console.log(decoded);
                // window.sessionStorage.setItem("id", decodedId);

                // var decodedHeader = jwt_decode(token, { header: true });
                // console.log(decodedHeader);
               
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
                    <h6 style={{color: "white"}}>Email: </h6>

                    {/* <ul>
                     {this.state.customerDetail.map(detail =>(
                          <h6 key={detail.id}>{detail.username} </h6>
                     ))}
                   </ul> */}

                     <h6 style={{color: "white"}} key={this.state.customerDetail.id}>{this.state.customerDetail.username} </h6> 
                    <h6 style={{color: "white"}}>Full name:</h6> 
                     <h6 style={{color: "white"}} key={this.state.customerDetail.id}>{this.state.customerDetail.fullname} </h6>
                    <h6 style={{color: "white"}}>Phone number:</h6>
                    <h6 style={{color: "white"}} key={this.state.customerDetail.id}>{this.state.customerDetail.phoneNumber} </h6>
                    <hr/>
                    <h4>Personal address</h4>
                    <h6 style={{color: "white"}} key={this.state.customerDetail.id}>{this.state.customerDetail.address} </h6>
                    <hr/>
                <CreateEditButton/> 
                <DeleteAccount/>
             </div> 
          </Container>
            
        );
     }
         
       
}
    


     export default Profile_Details;

