/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import { connect } from 'react-redux';

import TodoItem from 'Components/TodoItem';

import TodoListStyles from './style.css';

class TodoList extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.todos !== this.props.todos) {
			this.renderItems(this.props.todos);
		}
	}

	renderItems = todos => {
		if (todos) {
			return todos.map(todo => {
				return <TodoItem key={todo.id} todo={todo} />;
			});
		}
		return null;
	};

	render() {
		const { todos } = this.props;
		return <TodoListStyles>{todos && this.renderItems(todos)}</TodoListStyles>;
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

export default connect(
	mapStateToProps,
	null,
)(TodoList);
