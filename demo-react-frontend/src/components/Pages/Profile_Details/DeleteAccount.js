import axios from "axios";
import React, {Component} from "react";
import {Button, Container} from "react-bootstrap";
import urlAddress from "../../ip.json";

const url = 'http://'+urlAddress.ip+':8080/api/';
console.log(urlAddress.ip);

class DeleteAccount extends Component
{
 

 deleteAccount() {
        var msg = window.confirm("This is will delete the account permanently and all it is data and cannot be retrieved after this action");
        if (msg === true )
         {
            alert("Account successfully deleted");
            axios.delete(url + `users/8`)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error);                         
            })
            window.location.replace('http://localhost:3000/register');
            window.sessionStorage.clear();

        }
                      
  }

    
        render(){
               return (   
                 <Container >
                    <Button
                        id="btnDelete" type="Button"
                        value="Delete account"
                        variant="danger" 
                        style={{ marginRight: '0%' }}
                        className="Button"
                        onClick={() => this.deleteAccount()}
                        >                         
                        Delete account
                    </Button>
                 </Container>
                 
               );
               
           }
}

         
      export default DeleteAccount;
        