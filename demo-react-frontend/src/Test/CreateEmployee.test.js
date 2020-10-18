import React from 'react';
import CreateEmployee from '../components/Pages/Business-Owner/AddEmployee.js';
import Employee from '../components/Pages/Business-Owner/EmployeesPage.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<CreateEmployee /> CreateEmployee Unit Test", () => {
    it('should render to Create employee page', () => {
        const component = mount(<Employee />);
        const button = component.find('CreateAddEmployeeButton').first().children(0)
        console.log(button)
        button.simulate('click');
    });
    it('POST API call with all attributes', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            workerName: 'Josh',
            workerAge: '22'
        };
        const component = shallow(<CreateEmployee {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
    it('POST API call with no name', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            workerName: '',
            workerAge: '22'
        };
        const component = shallow(<CreateEmployee {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
    it('POST API call with no Age', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            workerName: 'Josh',
            workerAge: ''
        };
        const component = shallow(<CreateEmployee {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
});
