/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from 'Redux/actions';
import IconButton from 'Components/IconButton';
import AddTodoStyle from './style.css';

class AddTodo extends React.Component {
	addItem = e => {
		e.preventDefault();
		this.props.addItem({
			id: this.props.todos.length + 1,
			voice: 'Edit Voice here',
			text: 'Edit Text here',
		});
	};

	render() {
		return (
			<AddTodoStyle>
				{this.props.todos.length > 0 && (
					<IconButton onClick={this.addItem}>
						<span className="icon-add-row">
							<span className="path1" />
							<span className="path2" />
						</span>
					</IconButton>
				)}
			</AddTodoStyle>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addItem: newItem => dispatch(addTodoItem(newItem)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AddTodo);
