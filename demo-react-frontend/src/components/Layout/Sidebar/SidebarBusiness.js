import React,{ Component } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

class SidebarBusiness extends Component{
    render() {
        const SidebarData = [
            {
                title: 'My Services',
                path: '/BusinessServices',
                icon: <BsIcons.BsCardChecklist />,
                cName: 'nav-text'
            },
            {
                title: 'Appointments',
                path: '/dashboardOwner',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            },
            
            {
                title: 'Employees',
                path: '/EmployeesPage',
                icon: <IoIcons.IoMdPeople />,
                cName: 'nav-text'
            },
        ];
        return (
            <div className='sidebar'>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <nav>
                        <ul className='nav-menu-items'>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <a href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>
        );
    }
}

export default SidebarBusiness;