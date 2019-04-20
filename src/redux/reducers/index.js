import { combineReducers } from 'redux';
import TodoReducer from './todoitems';

export default combineReducers({
	todos: TodoReducer,
});
