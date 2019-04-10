import React from 'react';
import Logo from 'Components/Logo';
import IconButton from 'Components/IconButton';
import NavBarStyles from './style.css';

const NavBar = () => {
	return (
		<NavBarStyles>
			<div className="navbar wrapper">
				<Logo />
				<div className="dataBtn">
					<IconButton>
						<i className="icon-upload" />
					</IconButton>
					<IconButton>
						<i className="icon-fetch" />
					</IconButton>
				</div>
			</div>
		</NavBarStyles>
	);
};

export default NavBar;
