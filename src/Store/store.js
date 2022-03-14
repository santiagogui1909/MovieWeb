import {loginReducer} from '../Reducer/loginReducer';
import {movieReducer} from '../Reducer/movieReducer';
import {createStore , combineReducers} from 'redux';

const reducers = combineReducers({
    loginReducer,
    movieReducer,
});
  
export const store = createStore(reducers);