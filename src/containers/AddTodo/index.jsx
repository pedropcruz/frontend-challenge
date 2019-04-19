import React from 'react';

import IconButton from 'Components/IconButton';

import AddTodoStyle from './style.css';

const AddTodo = () => {
	return (
		<AddTodoStyle>
			<IconButton>
				<span className="icon-add-row">
					<span className="path1" />
					<span className="path2" />
				</span>
			</IconButton>
		</AddTodoStyle>
	);
};

export default AddTodo;
