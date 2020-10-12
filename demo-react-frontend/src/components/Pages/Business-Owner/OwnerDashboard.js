import React, { Component } from "react";
import SidebarBusiness from "../../Layout/Sidebar/SidebarBusiness.js";
import Appointments from './Appointments.js';

class OwnerDashboard extends Component {
    render() {
        return (
            <>
            <SidebarBusiness/>
            <Appointments/>
            </>
        );
    }
}

export default OwnerDashboard;
