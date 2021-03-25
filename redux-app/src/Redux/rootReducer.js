import { combineReducers } from 'redux';


import Reducer from './counter/counter.reducer';


const rootReducer = combineReducers({

    counter:Reducer,

});

export default rootReducer;