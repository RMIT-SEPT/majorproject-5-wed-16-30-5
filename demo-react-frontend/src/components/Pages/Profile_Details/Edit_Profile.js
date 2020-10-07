import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import axios from 'axios';
import './Profile_Details.css';
import urlAddress from "../../ip.json";

const url = 'http://'+urlAddress.ip+':8080/api/';
console.log(urlAddress.ip);



class Edit_Profile extends Component
{
    constructor(props) {
             super(props);
             this.state = {
                username:'',
                // Detail: [],
                //  title: '',
                //  fName: '',
                //  lName: '',
                //  dateOfBirth: '',
                //  address: '',
                //  phone: '',
             };

             this.onChange = this.onChange.bind(this);
             this.onSubmit = this.onSubmit.bind(this);
           
         }

         onChange(event) {
             this.setState({[event.target.name]: event.target.value});
         }

          
         onSubmit(event) {    
              let h = new Headers(); 

               event.preventDefault();          
                const changeDetails =
                {
                    id:'9',
                    username: this.state.username,
                    password:'password'
                }
                this.edit_Profile(changeDetails);
                alert("Personal Details successfully updated");
                console.log(changeDetails);
              
             }

        getProfileDetails(){
            axios.get( url + `users/9`)
             .then(response =>{
                 this.setState({
                    username: response.data.username,
                 });
             })
             .catch(error => console.log(error));
        }     

        componentDidMount(){
            this.getProfileDetails();
            

        }

        edit_Profile(changeDetails){
            this.reqHeaders();

            axios.request({
                method: 'POST',
                headers:
                 {  
                     'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   
                 },

                url:    url + `users/register`,
                body: JSON.stringify({changeDetails})
                
                
                // transformRequest:
                //  [(data)=> {return data; }],
                // completed: true,

            })
            .then(response => {
                console.log(response);
                console.log(changeDetails);
            })
            .catch(error =>  console.log(error));

        }

         reqHeaders(){
            
             let header = new Headers();

                let email = window.sessionStorage.getItem('email');
                const Cryptr = require('cryptr');
                const cryptr = new Cryptr('keyword');

                let encryptedString = window.sessionStorage.getItem('encrypted');
                const decryptedString = cryptr.decrypt(encryptedString);
                console.log(decryptedString);

                let encoded = window.btoa(email + ':' + decryptedString);
                let auth = 'Basic ' + encoded;
                header.append('Content-Type', 'application/json');
                header.append('Accept', 'application/json');
                header.append('Authorization', auth);
            

        }

        //  onSubmit2(e){
        //     e.preventDefault();
        //     const changeDetails =
        //             {
        //                 username:'dom@com',
                                  
        //             }
        //             axios.put( url + `users/3`, changeDetails)
        //             // axios.put(url + 'http://jsonplaceholder.typicode.com//posts/1', changeDetails)
        //             .then(changeDetails =>{
        //                 console.log(changeDetails);
        //             }).catch(error =>{
        //                 console.log(error);
        //                     alert("Personal Details successfully updated");
        //              })
        //              console.log(changeDetails);
                    
                    
        
            
        // }
        
         
        //  onSubmit(event) {
        //     console.log(this.state)
        //         event.preventDefault();
        //         const changeDetails =
        //         {
        //             username: this.state.username.value,
        //             // email: this.state.email.value,
        //             // title: this.state.title.value,
        //             // fName:  this.state.fName.value,
        //             // lName:  this.state.lName.value,
        //             // dateOfBirth: this.state.dateOfBirth.value,
        //             // address: this.state.address.value,
        //             // phone: this.state.phone.value,
                    
                   
        //         }
        //         axios.put( url + `users/3`, changeDetails)
        //         // axios.put(url + 'http://jsonplaceholder.typicode.com//posts/1', changeDetails)
        //         .then(changeDetails =>{
        //         }).catch(error =>{
        //                 console.log(error)
        //                 alert("Personal Details successfully updated");
        //          })
        //          console.log(changeDetails);
                
                

        //      }

    

        render(){
               return (   
                 <container fluid style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
                     <Sidebar/>
                    <div className="body">
                         <hr/>
                         <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                               
                                <input
                                    id="emailD"
                                    type="text"
                                    className="form-control form-control"
                                    name="username"
                                    value={this.state.username}
                                    // key={this.state.username.id }
                                    onChange={this.onChange}
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                             </Form.Group>
                          {/* <Form.Group controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <input
                                    type="address"
                                    className="form-control form-control"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                />
                          </Form.Group>
                          <Form.Group controlId="formBasicPhone">
                              <Form.Label>Phone number</Form.Label>
                                   <input
                                       type="phone"
                                       className="form-control form-control"
                                       name="phone"
                                       value={this.state.phone}
                                       onChange={this.onChange}
                                      />
                              </Form.Group>
                                  <Form.Row>
                                     <Form.Group controlId="formBasicFname">
                                          <Col>
                                          <Form.Label for="firstName">First Name</Form.Label>
                                          <input
                                              id="firstName"
                                              type="fName"
                                              className="form-control form-control"
                                              name="fName"
                                              value={this.setState.fName}
                                              onChange={this.onChange}
                                          />
                                          </Col> 
                                      </Form.Group>
                                          <Form.Group controlId="formBasicLame">
                                          <Col>
                                          <Form.Label for="lastName">Last Name</Form.Label>
                                              <input
                                              id= "lastName"
                                              type="LName"
                                              className="form-control form-control"
                                              name="lName"
                                              value={this.setState.lName}
                                              onChange={this.onChange}
                                            />
                                          </Col>
                                      </Form.Group>
                                      <Form.Group controlId="formBasicDob">
                                          <Col>
                                          <Form.Label>Date Of Birth</Form.Label>
                                              <input
                                              type="date"
                                              className="form-control form-control"
                                              name="dateOfBirth"
                                              value={this.state.dateOfBirth}
                                              onChange={this.onChange}
                                              />
                                          </Col>
                                      </Form.Group>
                                  </Form.Row> */}
                                    <Button
                                        id="btnSave"  value="save"
                                        style={{ marginBottom: '10%' }} 
                                        className="Button"
                                        type="save"
                                        // onClick={this.onSubmit}
                                        onChange={this.onChange}
                                        // href="/profile"
                                        >
                                        Save
                                   </Button>
                                <br/>
                              <p/>
                           </Form>
                        
                           </div>
                 </container> 
                 
               );
               
           }
}

         
      export default Edit_Profile;
        


