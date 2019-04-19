/* eslint react/prop-types: 0 */

import React from 'react';

function editableContent(WrappedComponent) {
	return class extends React.Component {
		state = {
			editing: false,
		};

		edit = () => {
			this.setState(
				{
					editing: true,
				},
				() => {
					this.domElm.focus();
				},
			);
		};

		save = () => {
			this.setState({ editing: false });
		};

		cancel = () => {
			this.setState({ editing: false });
		};

		handleKeyDown = e => {
			const { key } = e;
			switch (key) {
				case 'Enter':
				case 'Escape':
					this.save();
					break;
				default:
			}
		};

		toggleEdit = e => {
			e.stopPropagation();
			const { editing } = this.state;
			if (editing) {
				this.cancel();
			} else {
				this.edit();
			}
		};

		render() {
			let isEditable = true;
			const { editing } = this.state;
			const { editOnClick, extraclass, value } = this.props;
			const extraClass = extraclass || '';
			if (editOnClick !== undefined) {
				isEditable = editOnClick;
			}
			return (
				<WrappedComponent
					className={editing ? `${extraClass} editing` : extraClass}
					onClick={isEditable ? this.toggleEdit : undefined}
					contentEditable={editing}
					suppressContentEditableWarning
					ref={domNode => {
						this.domElm = domNode;
					}}
					onBlur={this.save}
					onKeyDown={this.handleKeyDown}
					{...this.props}
				>
					{value}
				</WrappedComponent>
			);
		}
	};
}

export default editableContent;
