import fetch from 'cross-fetch';
import {
	GET_TODOS,
	ADD_TODO,
	REMOVE_TODO,
	REQUEST_POST_SUCCESS,
	REQUEST_POST_ERROR,
} from 'Constants/actionTypes';
import API from 'Constants/defaultValues';

export const reveiveItems = items => {
	return {
		type: GET_TODOS,
		todos: items,
	};
};

export const addTodoItem = newItem => {
	return {
		type: ADD_TODO,
		newItem,
	};
};

export const removeTodoItem = id => {
	return {
		type: REMOVE_TODO,
		id,
	};
};

export const requestSuccess = response => {
	return {
		type: REQUEST_POST_SUCCESS,
		success: response,
	};
};

export const requestError = error => {
	return {
		type: REQUEST_POST_ERROR,
		error,
	};
};

export const postItems = newTodos => {
	const { url } = API;
	return dispatch => {
		console.log(newTodos);
		return fetch(url, { method: 'POST', body: JSON.stringify(newTodos) })
			.then(response => {
				if (response.status >= 200 && response.status < 300) {
					console.log(response);
					dispatch(requestSuccess(response));
				} else {
					const error = new Error(response.statusText);
					error.response = response;
					dispatch(requestError(error));
					throw error;
				}
			})
			.catch(error => {
				console.log('request failed', error);
			});
	};
};

export const fetchItems = () => {
	const { url } = API;
	return dispatch => {
		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(reveiveItems(json)));
	};
};
