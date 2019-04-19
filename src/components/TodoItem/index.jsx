import React from 'react';

import IconButton from 'Components/IconButton';
import editableContent from 'Components/EditableContent';
import ItemStyle from './style.css';

const TodoItem = () => {
	const EditableTitle = editableContent('h3');
	const EditableText = editableContent('p');
	return (
		<ItemStyle className="todolist">
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
				<EditableTitle value="Voice 2" />
			</div>
			<IconButton>
				<i className="icon-delete" />
			</IconButton>
			<EditableText
				extraclass="todolist-desc"
				value="This is a one line sentence made to show how it fits"
			/>
		</ItemStyle>
	);
};

export default TodoItem;
