import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it('should render all components appropriately', () => {
    expect(wrapper).toMatchSnapshot();
  });

})


