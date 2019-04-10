import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './style.css';

const IconButton = ({ children }) => {
	return <ButtonStyle type="submit">{children}</ButtonStyle>;
};

IconButton.propTypes = {
	children: PropTypes.element.isRequired,
};

export default IconButton;
