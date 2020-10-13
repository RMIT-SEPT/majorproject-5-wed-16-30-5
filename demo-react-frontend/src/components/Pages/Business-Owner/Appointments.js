import React, {Component} from 'react';
import './Appointments.css';
import * as IoIcons from 'react-icons/io';
import { Button } from "react-bootstrap";
import urlAddress from '../../ip.json';
import Sidebar from '../../Layout/Sidebar/Sidebar';

const url = 'http://' + urlAddress.ip + ':8080/api/appointment/all';
console.log(urlAddress.ip)


class Appointments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
        }
    }

    fetchData() {
        
        let encoded = window.btoa("email@email.com:password");
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
                this.setState({ appointments: json });

            })
    }

    


    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
        <>
            <Sidebar/> 
            <div style={{marginLeft:'25%'}}>
                <h1><IoIcons.IoIosPaper /> Appointments</h1>
                <table style={{ width: '700px' }} >
                    <thead>
                        <tr>
                            <td> Appointment</td>
                            <td> Date</td>
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
        </>
        )
    }
}

export default Appointments