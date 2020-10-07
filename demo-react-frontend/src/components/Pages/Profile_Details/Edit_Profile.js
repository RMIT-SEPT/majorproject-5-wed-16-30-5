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
        super(props)

        this.state = {
            id: '1',
            username: '',
            password:'password'
        }
        this.SaveData = this.SaveData.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
    }

    
    changeNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
    }
    SaveData() {
        let h = new Headers();

        h.append('Content-Type', 'application/json');
        h.append('Accept', 'application/json');

        fetch(url + 'users/register', {
            method: 'post',
            headers: h,
            body: JSON.stringify({
                id: this.state.id,
                username: this.state.username,
                password: this.state.password,
                confirmPassword: this.state.password
            })
        })
    }
    componentDidMount() {
    }

    render() {

        return (
            <Container fluid style={{ padding: '0rem' }}>
                <Sidebar />
                <div style={{ marginLeft: '25%' }}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label> username: </label>
                            <input type="text" placeholder="Name" name="username" className="form-control"
                                value={this.state.username} onChange={this.changeNameHandler} />
                        </div>
                        
                        <Button
                            className="btn btn-success"
                            onClick={this.SaveData.bind(this, this.state.id)}>
                            Save
                        </Button>
                    </form>

                </div>
            </Container>
        )
    }
}

         
      export default Edit_Profile;
        


