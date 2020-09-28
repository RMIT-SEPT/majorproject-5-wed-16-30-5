import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import './Profile_Details.css';


class CreateEditButton extends Component
{
    constructor(props) {
             super(props);
             this.state = {
                 email: '',
                 fName: '',
                 lName: '',
                 dateOfBirth: '',
                 address: '',
                 phone: '',
             };

             this.onChange = this.onChange.bind(this);
             this.onSubmit = this.onSubmit.bind(this);
             this.ShowEditForm = this.ShowEditForm.bind(this);


         }

         onChange(e) {
             this.setState({[e.target.name]: e.target.value});
         }
         
         onSubmit(e) {
                e.preventDefault();
                const changeDetails =
                {
                    email: this.state.email,
                    fName:  this.state.fName,
                    lName:  this.state.lName,
                    dateOfBirth: this.state.dateOfBirth,
                    address: this.state.address,
                    phone: this.state.phone,
                   
                }
                alert("Personal Details successfully updated");
                console.log(changeDetails);

             }
    
    ShowEditForm(btnEdit) {
      var editForm = document.getElementById("editForm");
      if (btnEdit.value == "Edit") {
          editForm.style.display = "block";
          btnEdit.value = "";
      } else {
          editForm.style.display = "none";
          btnEdit.value = "Edit";
      }
  }  

        render(){
               return (   
                 <Container >
                    <Button
                        id="btnEdit" type="Button" value="Edit"
                        onClick={(btnEdit) => this.ShowEditForm(btnEdit)} 
                        style={{ marginBottom: '10%' }}  className="Button">
                        Edit
                    </Button>
                    <hr />
                         <Form  id="editForm" style={{display: "none"}} onSubmit={this.onSubmit}>
                              <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <input
                                  id="emailD"
                                  type="email"
                                  className="form-control form-control"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.onChange}
                              />
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
  
                          <Form.Group controlId="formBasicAddress">
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
                                  </Form.Row>
                                    <Button
                                        id="btnSave" type="Button" value="save"
                                        style={{ marginBottom: '10%' }}  className="Button">
                                        Save
                                   </Button>
                                <br/>
                              <p/>
                           </Form>
                 </Container>
                 
               );
               
           }
}

         
      export default CreateEditButton;
        



