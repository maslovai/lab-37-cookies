import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';

import * as action from '../../app/action';



describe ('Note actions:', () => {
 
    let note = {content: "test antibiotic", _id:uuid()};
    // let id = note._id;
    
    test (' "noteCreate" returns correct action type and payload', () => {

    let testAction = action.noteCreate(note);
        console.log('in test:::::::',note);
    // expect(action.type).toEqual('CREATE');
    expect(testAction.payload.content).toBe('test antibiotic');
    expect(testAction.payload.id).not.toBe(undefined);
  });


  test (' "Delete" returns correct action type and categoryId', () => {
        // let note = {name: 'test delete', id: uuid()};
        let testAction = action.noteDelete(note);

        expect(action.type).toEqual('DELETE');
        expect(action.payload).toEqual(note._id)
  })
});
