import React, {Component} from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import './Profile_Details.css';
class CreateEditButton extends Component
{
    
        render(){
               return (   
                 <Container >
                    <Button
                        id="btnEdit" type="Button" value="Edit"
                        style={{ marginBottom: '10%' }}  className="Button"
                        href="/profile/Edit">
                        Edit
                    </Button>
                 </Container>
                 
               );
               
           }
}

         
      export default CreateEditButton;
        