import {combineReducers} from 'redux';

import noteReducer from '../components/notes/reducer';

export default combineReducers({
    note: noteReducer
});