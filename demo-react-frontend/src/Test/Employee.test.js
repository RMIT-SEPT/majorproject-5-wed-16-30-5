import React from 'react';
import Employee from '../components/Pages/Business-Owner/EmployeesPage.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Employee /> Employee Unit Test", () => {
    it('should have employee Alex', () => {
        const component = mount(<Employee />);
        expect(component.find('tr > td').at(0).equals('Alex'));
    });
    it('should have employee Alex', () => {
        const component = mount(<Employee />);
        expect(component.find('tr > td').at(1).equals('Manager'));
    });
    it('should have employee Alex', () => {
        const component = mount(<Employee />);
        expect(component.find('tr > td').at(2).equals('RMIT connect'));
    });
    it('should have employee Alex', () => {
        const component = mount(<Employee />);
        expect(component.find('tr > td').at(3).equals('8:00 - 18:00'));
    });
});
