/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react';

import Logo from 'Components/Logo';
import IconButton from 'Components/IconButton';

import { connect } from 'react-redux';
import { fetchItems, postItems } from 'Redux/actions';

import NavBarStyles from './style.css';

class NavBar extends React.Component {
	fetchItems = e => {
		e.stopPropagation();
		this.props.fetchData();
	};

	uploadItems = e => {
		e.stopPropagation();

		this.props.postData(this.props.todos);
	};

	render() {
		return (
			<NavBarStyles>
				<div className="navbar wrapper">
					<Logo />
					<div className="dataBtn">
						<IconButton onClick={this.uploadItems}>
							<i className="icon-upload" />
						</IconButton>
						<IconButton onClick={this.fetchItems}>
							<i className="icon-fetch" />
						</IconButton>
					</div>
				</div>
			</NavBarStyles>
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
		fetchData: () => dispatch(fetchItems()),
		postData: todos => dispatch(postItems(todos)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NavBar);
