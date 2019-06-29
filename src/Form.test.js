import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
    let wrapper;
    const addNewStudent = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
        <Form 
            addNewStudent={addNewStudentMock}/>
        );
    });

    it('should render all components appropriately', () => {
        expect(wrapper).toMatchSnapShot();
    })
})