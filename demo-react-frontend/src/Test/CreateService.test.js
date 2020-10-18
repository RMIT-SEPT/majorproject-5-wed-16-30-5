import React from 'react';
import CreateService from '../components/Pages/Business-Owner/CreateService.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../components/Layout/Sidebar/Sidebar.js';

Enzyme.configure({ adapter: new Adapter() });

describe("<CreateService /> CreateService Unit Test", () => {
    it('should render to Create service page', () => {
        const component = mount(<Sidebar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(0).prop('href')).toBe('/CreateService');
    });
    it('POST API call with all attributes', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            serviceIdentifier: 's1234',
            serviceName: 'RMIT CONNECT',
            serviceDescription: 'rmit connect service'
        };
        const component = shallow(<CreateService {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
    it('POST API call with no name', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            serviceIdentifier: 's1234',
            serviceName: '',
            serviceDescription: 'rmit connect service'
        };
        const component = shallow(<CreateService {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
    it('POST API call with no description', () => {
        const mockFn = jest.fn();
        const props = {
            handleClick: mockFn,
            serviceIdentifier: 's1234',
            serviceName: 'RMIT CONNECT',
            serviceDescription: ''
        };
        const component = shallow(<CreateService {...props} />);
        const button = component.find('Button')

        button.simulate('click');
        expect(mockFn).not.toHaveBeenCalled();
    });
});
