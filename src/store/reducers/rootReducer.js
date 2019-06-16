import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';



const rootReducer = combineReducers({
    sampleReducerData: sampleReducer
})


export default rootReducer;
