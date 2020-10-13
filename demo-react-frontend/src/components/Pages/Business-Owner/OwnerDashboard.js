import React, { Component } from "react";
import SidebarBusiness from "../../Layout/Sidebar/Sidebar.js";
import Appointments from './Appointments.js';
import { Container } from "react-bootstrap";

class OwnerDashboard extends Component {
    render() {
        return (
            <Container fluid style={{ padding: '0rem' }}>
                <SidebarBusiness />
                <div style={{ marginLeft: '25%' }}>
                    <Appointments />
                </div>
            </Container>
        );
    }
}

export default OwnerDashboard;
