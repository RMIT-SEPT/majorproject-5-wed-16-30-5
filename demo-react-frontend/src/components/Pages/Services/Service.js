import React from 'react';
import './Services.css';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaBorderNone } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import urlAddress from '../../ip.json';

const url = 'http://' + urlAddress.ip + ':8080/api/service/s123';

class Service extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appointments: []
        };
    }



    fetchData() {

        let encoded = window.btoa("owner@email.com:password");
        let auth = 'Basic ' + encoded;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Authorization', auth);
        h.append("Access-Control-Allow-Origin", "*")
        fetch(url, {
            method: 'GET',
            headers: h
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ appointments: json.appointments });
                console.log(this.state.appointments)
            })
    }
    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <div className='container' style={{ marginLeft: '25%' }}>
                <h1><BsIcons.BsCardChecklist /> Available Services</h1>
                <table style={{ width: '700px' }}>
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(a =>
                            <tr
                                className='appo'
                                key={a.appointmentIdentifier} >

                                <td> {a.appointmentName}</td>
                                <td> {a.appointmentDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

        )
    }
}

export default Service