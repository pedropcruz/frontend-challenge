import { GET_TODOS, ADD_TODO, REMOVE_TODO } from 'Constants/actionTypes';

function TodoReducer(state = [], action) {
	switch (action.type) {
		case GET_TODOS:
			return action.todos;
		case ADD_TODO:
			return [...state, action.newItem];
		case REMOVE_TODO: {
			const numIndex = Number(action.id);
			return state.filter(todo => todo.id !== numIndex);
		}
		default:
			return state;
	}
}

export default TodoReducer;
