import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';
import superagent from 'superagent';
import reducer from '../../components/notes/reducer';


describe('Notes Reducer:', () => {
		
    let testNote = {content:'test antibiotic', id: uuid()};
    let state =[];		

    test('adds a new note', () => {
        let action = {type: 'CREATE', payload: testNote};
        state = reducer(state, action);

        superagent.get(`${process.env.API_URL}/records?${testNote._id}`)
        .then(res=> expect(res.body.id).toEqual(testNote._id))
        .catch(err=>console.log(err))     
    });


    test('deletes a note', () => {
        state = [testNote];
        // console.log(state);
        state = reducer(state, {
            type: 'DELETE', 
            payload: testNote
        });
        expect(state.length).toEqual(0);
    });
})