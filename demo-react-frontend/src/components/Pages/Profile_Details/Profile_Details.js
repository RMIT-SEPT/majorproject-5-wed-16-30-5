import React, { Component } from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import CreateEditButton from './CreateEditButton'
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import axios from 'axios';
import urlAddress from "../../ip.json";
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import './Profile_Details.css';


const url = 'http://'+urlAddress.ip+':8080/api/';
console.log(urlAddress.ip);

     class Profile_Details extends Component{
  
      // getCustomer(){
    //     return axios.get(url);
    // }


    // getCustomerById(customerId){
    //     return axios.get(url + '/' + customerId);
    // }

    // get_Id(id){
    //     this.props.history.push(`/user/${id}`);
    // }

    // componentDidMount(){
    //     axios.get(url + `/`)
    //     .then((response) => {
    //         this.setState({ customerDetail: response.data});
    //     });
    // }

        constructor(props) {
            super(props)
        this.state = {
            // id:'',
            customerDetail: [],
            errorMsg:'',

        }
        // this.get_Id = this.get_Id.bind(this);
        // this.customer = this.customer.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    // componentDidMount() {
    //     const requestDetails = {
    //         method: 'GET',
    //         headers: { 
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //             customerDetail: this.state.username,
        
    //         })
    //     };
    //     axios.get(url + `users/3`, requestDetails)  
    //             .then(response =>{
    //                 console.log(response.json());
    //                     this.setState({
    //                     id: response.data,
    //                     customerDetail: response.data
    //                 });
    //             })
    //             .catch(error =>{
    //                 console.log(error)
    //                 this.setState({errorMsg: 'Cannot get the profile details' })
    //             })
    // }
   
    componentDidMount(){
        // const cus_id = this.props.match.params.id;
        // console.log(cus_id);
        // this.props.history.push(url + `/users/${customer_Id}`);
        axios.get(url + `users/3`)
        // axios.get('http://jsonplaceholder.typicode.com/posts/1')
        // axios.get('http://jsonplaceholder.typicode.com/posts/1')
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
             </div> 
          </Container>
            
        );
     }
         
       
}
    


     export default Profile_Details;

