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
                        // onClick={(btnEdit) => this.ShowEditForm(btnEdit)} 
                        style={{ marginBottom: '10%' }}  className="Button"
                        href="/profile/Edit">
                        Edit
                    </Button>
                 </Container>
                 
               );
               
           }
}

         
      export default CreateEditButton;
        


//     ShowEditForm(btnEdit) {
//       var editForm = document.getElementById("editForm");
//       if (btnEdit.value == "Edit") {
//           editForm.style.display = "block";
//           btnEdit.value = "";
//       } else {
//           editForm.style.display = "none";
//           btnEdit.value = "Edit";
//       }
//   } 