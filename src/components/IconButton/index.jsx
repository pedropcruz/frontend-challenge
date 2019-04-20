/* eslint react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './style.css';

const IconButton = ({ children, onClick, className = null }) => {
	return (
		<ButtonStyle className={className} onClick={onClick} type="submit">
			{children}
		</ButtonStyle>
	);
};

IconButton.propTypes = {
	children: PropTypes.element.isRequired,
};

export default IconButton;
