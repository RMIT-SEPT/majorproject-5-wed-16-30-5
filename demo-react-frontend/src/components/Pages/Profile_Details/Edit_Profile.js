import React, {Component} from "react";
import {Button,  Container} from "react-bootstrap";
import Sidebar from '../../Layout/Sidebar/Sidebar.js';
import './Profile_Details.css';
import urlAddress from "../../ip.json";

const url = 'http://'+urlAddress.ip+':8080/api/';
console.log(urlAddress.ip);

class Edit_Profile extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            id: '2',
            username: 'email@email.com',
            password:'password',
            fullname: '',
            address:'',
            phoneNumber: '',
        }
        this.SaveData = this.SaveData.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });    }

    handleSubmit = event => {
        event.preventDefault();

    }

    validation(){
        if (this.state.fullname === "" || this.state.address === ""||this.state.phoneNumber === "") {
            alert("Empty fields are not allowed!");
          }
    }

    SaveData() {
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        h.append('Accept', 'application/json');

            this.validation();
            var msg = window.confirm("Are you sure you want to update the details?");
            if (msg === true )
            {
                alert("Personal Details successfully updated");
                fetch(url + 'users/register', {
                    method: 'post',
                    headers: h,
                    body: JSON.stringify({
                        id: this.state.id,
                        username: this.state.username,
                        password: this.state.password,
                        confirmPassword: this.state.password,
                        fullname: this.state.fullname,
                        address:this.state.address,
                        phoneNumber: this.state.phoneNumber 
                    })
                })
                window.location.replace('http://localhost:3000/profile');
        } 
        console.log(this.state);
    }


    render() {

        return (
            <Container fluid style={{ padding: '0rem' }}>
                <Sidebar />
                <div style={{ marginLeft: '25%' }}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group ">
                            <label > Name: </label>
                            <input id="myError" type="text" placeholder="Enter full Name" name="fullname" className="form-control"
                                value={this.state.fullname} onChange={this.changeNameHandler} />
                        </div>
                        
                        <div className="form-group">
                            <label> Phone: </label>
                            <input type="text" placeholder="valid phone number" name="phoneNumber" className="form-control"
                                value={this.state.phoneNumber} onChange={this.changeNameHandler} />
                        </div>

                        <div className="form-group">
                            <label> Address: </label>
                            <input type="text" placeholder="Address" name="address" className="form-control"
                                value={this.state.address} onChange={this.changeNameHandler} />
                        </div>
                        
                        <Button
                            className="btn btn-success"
                            type="click"
                            onClick={this.SaveData.bind(this, this.state.id)}
                            //  href="/profile"
                             >
                            Save
                        </Button>
                    </form>

                </div>
            </Container>
        )
    }
    
}

         
      export default Edit_Profile;
        


