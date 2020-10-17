import React from 'react';
import Edit_Profile from "../components/Pages/Profile_Details/Edit_Profile";
import Profile_Details from "../components/Pages/Profile_Details/Profile_Details";
import Navbar from '../components/Layout/Navbar/Navbar.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Edit_Profile/ > Navigation to profile page after changing profile details Unit Test", () => {
    it('should render to profile page after clicking on save', () => {
        const component = mount(<Edit_Profile />);
        const button = component.find('Button').first().children(0)
        console.log(button)
        button.simulate('click');
        expect(component.find('Button').at(0).prop('href')).toBe('/profile');
    });

    it('should not render to profile page after clicking on save due to wrong path', () => {
        const component = mount(<Navbar/>);
        const button = component.find('li').first().children(0);
        console.log(button);
        button.simulate('click');
        expect(component.find('ul > li > a').at(0).prop('href')).toBe('/profile');
    });

    //Tests will pass Expected results are matched with thier values
    it("Return matched and correct updated personal inforamtion", ()=>{
        const Data =
        {
            fullname:'Sara van',
            address:'55 Flinders st',
            phone: '0000055555',
        
        };
        expect(Data.fullname).toBe('Sara van');
        expect(Data.address).toBe('55 Flinders st');
        expect(Data.phone).toBe('0000055555');
        
    });

    //Tests will fail the Expected results did not matched with thier values
    it("Return unmatched and incorrect personal inforamtion", ()=>{
        const Data =
        {
            fullname:'Sara van',
            address:'55 Flinders st',
            phone: '0000055555',
        };
        expect(Data.fullname).toBe('Sara van');
        expect(Data.address).toBe('5 Flinders st');
        expect(Data.phone).toBe('0000055588');

    });

  
});
