import React from 'react';
import DeleteAccount from "../components/Pages/Profile_Details/DeleteAccount";
import Profile_Details from "../components/Pages/Profile_Details/Profile_Details";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() });

describe("<DeleteAccount/> check the logged in customer id matched with backend-Unit Test", () => {
    it('Should get customer id to match with backend id', () => {
        const wrapper = mount(<Profile_Details id="5" />);
        expect(wrapper.props().id).toEqual('5');
      });

      it('Should get customer id to match with backend id', () => {
        const wrapper = mount(<Profile_Details id="5" />);
        expect(wrapper.props().id).toEqual('78');
      });

      it('Should not return customer id after deleting the account (customer do not exist):', () => {
        const wrapper = mount(<Profile_Details id="22" />);
        expect(wrapper.props().id).toEqual('22');
        wrapper.setProps({ id: '' }); 
        expect(wrapper.props().id).toEqual(''); 
      });

      it('Should not return customer id after deleting the account (customer do not exist):', () => {
        const wrapper = mount(<Profile_Details id="22" />);
        expect(wrapper.props().id).toEqual('22');
        wrapper.setProps({ id: '22' }); 
        expect(wrapper.props().id).toEqual(''); 
      });
}); 
   
   