/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react';

import { connect } from 'react-redux';
import { removeTodoItem } from 'Redux/actions';

import IconButton from 'Components/IconButton';
import editableContent from 'Components/EditableContent';
import ItemStyle from './style.css';

class TodoItem extends React.Component {
	removeItem = (e, id) => {
		e.preventDefault();
		this.props.removeItem(id);
	};

	render() {
		const {
			todo: { id, voice, text },
		} = this.props;
		const EditableTitle = editableContent('h3');
		const EditableText = editableContent('p');
		return (
			<ItemStyle className="todolist" id={id}>
				<div className="todolist-header">
					<input type="checkbox" id="scale" />
					<label htmlFor="Scale">
						<span className="icon-person">
							<span className="path1" />
							<span className="path2" />
							<span className="path3" />
							<span className="path4" />
						</span>
					</label>
					<EditableTitle value={voice} />
				</div>
				<IconButton className="todolist-delete" onClick={e => this.removeItem(e, id)}>
					<i className="icon-delete" />
				</IconButton>
				<EditableText extraclass="todolist-desc" value={text} />
			</ItemStyle>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeItem: id => dispatch(removeTodoItem(id)),
	};
};

export default connect(
	null,
	mapDispatchToProps,
)(TodoItem);
