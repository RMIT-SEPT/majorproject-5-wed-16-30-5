import React, {Component} from 'react';
import './Appointments.css';
import * as IoIcons from 'react-icons/io';
import { Button } from "react-bootstrap";
import urlAddress from '../../ip.json';

const url = 'http://' + urlAddress.ip + ':8080/api/appointment/';
console.log(urlAddress.ip)


class Appointments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
        }
        this.editAppointment = this.editAppointment.bind(this);
    }
    editAppointment(id) {
        this.props.history.push(`/appointment/${id}`);
    }
    fetchData() {
        
        let encoded = window.btoa("email22@email.com:password");
        let auth = 'Basic ' + encoded;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Authorization', auth);
        h.append("Access-Control-Allow-Origin", "*")



        fetch(url + 'all', {
            method: 'GET',
            headers: h
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ appointments: json });

            })
    }
    delete(id) {
        let h = new Headers();
        let encoded = window.btoa("email@email.com:password");
        let auth = 'Basic ' + encoded;

        h.append('Accept', 'application/json');
        h.append('Authorization', auth);
        if (window.confirm('Do you want to delete?')) {
            fetch(url + id, {
                method: 'delete',
                headers: h
            })
                .then(json => this.fetchData())
                .then(function (response) {
                    console.log('Authenticated')
                });
        }
    }


    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div >
                <h1><IoIcons.IoIosPaper /> Appointments</h1>
                <table style={{ width: '700px' }} >
                    <thead>
                        <tr>
                            <td> Appointment</td>
                            <td> Date</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(a =>
                            <tr
                                className='appo'
                                key={a.appointmentIdentifier} >

                                <td> {a.appointmentName}</td>
                                <td> {a.appointmentDate}</td>
                                <td className='edt'>
                                    <Button
                                        href={`/businessAppo/${a.appointmentIdentifier}`}
                                        onClick={() => this.editAppointment(a.appointmentIdentifier)}
                                        style={{ marginRight: '10px' }}>Edit</Button>
                                    <Button variant="danger" onClick={this.delete.bind(this, a.appointmentIdentifier)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

        )
    }
}

export default Appointments