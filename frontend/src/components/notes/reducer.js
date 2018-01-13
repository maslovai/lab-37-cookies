let initialState = [];

export default (state=initialState, action) => {

  let {type, payload} = action;

  switch(type) {

    case 'INIT':
        console.log("INIT");
        return payload || initialState;

    case 'CREATE':
        return [...state, payload];

    case 'UPDATE':
        return state.map(note => note._id === payload._id ? payload : note);

    case 'DELETE':
        console.log('Reducer before delete. State, payload._id:::', state, payload._id);
        let a = state.filter(note => note._id !== payload._id);
        console.log('After delete::::::', a);
        return a;

    case 'RESET':
        return initialState;

    default:
        return state;
  }

};