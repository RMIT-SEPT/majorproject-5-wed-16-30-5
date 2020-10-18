import React from 'react';
import Services from '../components/Pages/Services/Service.js';
import { wrapper, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Services /> Services Unit Test", () => {
    it('should be on serviceDash', () => {
        const component = mount(<Services />);
        expect(component.find('h1').equals(' Available Services'));
    });

    it("Renders a valid table", () => {
        const component = mount(<Services />);

        expect(component.find('.service-table').length).toBe(1);
    });
    
});
