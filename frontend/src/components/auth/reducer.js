let initialState = null;

export default(state=initialState,action)=>{

    let {type, payload} = action;
    
    switch(type) {

        case 'SET_AUTH_TOKEN':
        return payload;

        case 'DELETE_AUTH_TOKEN':
        return initialState;
        
        default:
        return state;
    }
}